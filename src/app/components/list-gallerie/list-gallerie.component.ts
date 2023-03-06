import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GallerieService } from 'src/app/services/gallerie/gallerie.service';
import { RecetteService } from 'src/app/services/recette/recette.service';

@Component({
  selector: 'app-list-gallerie',
  templateUrl: './list-gallerie.component.html',
  styleUrls: ['./list-gallerie.component.css']
})
export class ListGallerieComponent implements OnInit{

  declare gallerie : any [];
  declare form: FormGroup;
  declare recettes : any ;
  @Input() idrecetteencours! : number;
  constructor(
    private gallerieService : GallerieService,
    private router : Router,
    private formBuilder : FormBuilder,
    private recetteService: RecetteService,
  ){
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      gallerie_id:  ['', Validators.required],
      id_recette:  [''],
	    gallerie_filename:  ['', Validators.required],
	    id_utilisateur :  ['', Validators.required],

    })
    this.getGalleries();
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
