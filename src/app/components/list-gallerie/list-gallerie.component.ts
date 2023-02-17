import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GallerieService } from 'src/app/services/gallerie/gallerie.service';

@Component({
  selector: 'app-list-gallerie',
  templateUrl: './list-gallerie.component.html',
  styleUrls: ['./list-gallerie.component.css']
})
export class ListGallerieComponent implements OnInit{

  declare gallerie : any [];
  declare form: FormGroup;


  constructor(
    private gallerieService : GallerieService,
    private router : Router,
    private formBuilder : FormBuilder
  ){
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      gallerie_id:  ['', Validators.required],
	    gallerie_filename:  ['', Validators.required],
	    id_utilisateur :  ['', Validators.required],

    })
    this.getGalleries();

  }
  getGalleries() {
    return this.gallerieService.findAllGalleries().subscribe(
      (data=>{
        this.gallerie = data as any [];
      }
        )

    )
  }


}
