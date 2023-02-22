import { Recetteingredient } from 'src/app/models/recetteingredient/recetteingredient';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';
import { RecetteService } from 'src/app/services/recette/recette.service';
import { Recette } from 'src/app/models/recette/recette';


@Component({
  selector: 'app-postrecette',
  templateUrl: './postrecette.component.html',
  styleUrls: ['./postrecette.component.css']
})

export class PostrecetteComponent implements OnInit{
  declare form: FormGroup;
  declare ingredient : any ;
  declare formaddIngredient : FormGroup;
  addingre=false;
  afficheretape=false;
  declare recettes : any ;
  declare idrecetteencours : number;



  constructor (
    private recetteService: RecetteService,
    private formBuilder: FormBuilder,
    private router : Router,
    private ingredientService : IngredientsService,

  ){}
    ngOnInit(): void {


        this.formaddIngredient = this.formBuilder.group({
          // id_ingredient:['',Validators.required],
          id_recette:['',Validators.required],
          quantiteingredient:['',Validators.required],
        })

        this.form = this.formBuilder.group({

          titre_recette: [''],
          date_recette:[new Date()],
          description_recette:[''],
          categorie_recette:[''],
          niveaudifficulte_recette:[''],
          tempspreparation_recette:[''],
          tempscuisson_recette:[''],
          tempstotal_recette:[''],
          nbpersonne_recette:[''],
          recettepremium_recette:[''],
          id_utilisateur:['1'],
        });
        this.recetteService.findAllRecettes().subscribe(
          data =>{
          console.log(data);
              this.recettes = Object.values(data);
             this.recettes.sort((a: { date_recette: number; }, b: { date_recette: number; }) => (a.date_recette < b.date_recette ? 1 : -1))
              console.log(this.recettes);
              this.idrecetteencours=this.recettes[0].id_recette;
              console.log(this.idrecetteencours);
            }
        )
  }
  create(){
  console.table(this.form.value)
     this.recetteService.saveRecette(this.form.value).subscribe(
      () =>{
        this.router.navigate(['postrecette']);
      }
     );
  }
  affingre() {
    this.addingre=true;
    console.log(this.addingre);
  }

  cacheringr(){

  this.addingre=false;

  }
  affetapes() {
    this.afficheretape=true;
    console.log(this.afficheretape);
  }
  cachetape(){
    this.afficheretape=false;
  }

  }



