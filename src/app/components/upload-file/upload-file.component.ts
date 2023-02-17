import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Gallerie } from 'src/app/models/gallerie/gallerie';
import { FileUploadServiceService } from 'src/app/services/fileUploadService/file-upload-service.service';
import { GallerieService } from 'src/app/services/gallerie/gallerie.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit{

  file!: File ; // valeur defini qui ne peut pas etre nul

  fileDetails!: any;
  fileUris: Array<string> = []; // stock les urls des images
  declare form : FormGroup;
  declare gallerie : any [];

  constructor(
    private fileUploadService: FileUploadServiceService,
    private router: Router,
    private formBuilder : FormBuilder,
    private gallerieService : GallerieService
    ) {

    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      gallerie_id:  ['', Validators.required],
	    galleriefilename:  ['', Validators.required],
	    id_utilisateur :  ['1', Validators.required],

    })
    this.getGalleries();
  }

  selectFile(event: any) {
    this.file = event.target.files.item(0);
  }
 // envoi les informations de l image  à la BD
  uploadFile() {
    this.form.value.galleriefilename =  this.file.name
    this.fileUploadService.upload(this.form.value).subscribe({
      next: (data) => {
        console.log("Data : "+data);
        console.log("File : "+this.file);

      },
      error: (e) => {
        console.log(e);
      }
    });

    // envoi  l image dans le backend pour stockage

    this.fileUploadService.upload2(this.file).subscribe({
      next: (data) => {
        this.fileDetails = data;
        this.fileUris.push(this.fileDetails.fileUri);
        // alert("File Uploaded Successfully")
        // location.reload();
    this.gallerieService.findGallerieByName( this.file.name).subscribe(
      data => {this.gallerie.push(data as Gallerie)}
    )
      },
      error: (e) => {
        console.log(e);
      }
    })

  }
  getGalleries() {
    return this.gallerieService.findAllGalleries().subscribe(
      (data=>{
        this.gallerie = data as any [];
        console.log(this.gallerie)
      }
        )

    )
  }
}
