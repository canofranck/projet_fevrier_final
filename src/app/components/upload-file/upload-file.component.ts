import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Gallerie } from 'src/app/models/gallerie/gallerie';
import { FileUploadServiceService } from 'src/app/services/fileUploadService/file-upload-service.service';
import { GallerieService } from 'src/app/services/gallerie/gallerie.service';
import { RecetteService } from 'src/app/services/recette/recette.service';

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
  declare recettes : any ;
  @Input() idrecetteencours! : number;
  constructor(
    private fileUploadService: FileUploadServiceService,
    private router: Router,
    private formBuilder : FormBuilder,
    private gallerieService : GallerieService,
    private recetteService: RecetteService,
    ) {

    }

  ngOnInit(): void {
    this.recetteService.findAllRecettes().subscribe(
      data =>{
      // console.log(data);
          this.recettes = Object.values(data);
         this.recettes.sort((a: { date_recette: number; }, b: { date_recette: number; }) => (a.date_recette < b.date_recette ? 1 : -1))
          // console.log(this.recettes);
         this.idrecetteencours=this.recettes[0].id_recette;
        //  console.log(" id recette avant le set"+this.idrecetteencours);
          this.recetteService.setIdRecetteEncours( this.idrecetteencours);
          // console.log(" id recette en cours dans affiche ingredient"+this.idrecetteencours);
        }
    )
    this.form = this.formBuilder.group({
      gallerie_id:  ['', Validators.required],
      id_recette:  [this.idrecetteencours],
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


    this.form.value.galleriefilename =  this.file.name;
    this.form.value.id_recette= this.idrecetteencours;
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
