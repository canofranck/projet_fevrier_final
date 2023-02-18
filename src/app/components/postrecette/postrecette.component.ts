import { Recetteingredient } from 'src/app/models/recetteingredient/recetteingredient';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';
import { RecetteService } from 'src/app/services/recette/recette.service';


@Component({
  selector: 'app-postrecette',
  templateUrl: './postrecette.component.html',
  styleUrls: ['./postrecette.component.css']
})

export class PostrecetteComponent implements OnInit{
  declare form: FormGroup;
  declare ingredient : any ;
  declare formaddIngredient : FormGroup;



  constructor (
    private recetteService: RecetteService,
    private formBuilder: FormBuilder,
    private router : Router,
    private ingredientService : IngredientsService,

  ){}
    ngOnInit(): void {
        this.form = this.formBuilder.group({
          titre_recette: new FormControl(''),
          date_recette:new FormControl(''),
          description_recette:new FormControl(''),
          categorie_recette:new FormControl(''),
          niveaudifficulte_recette:new FormControl(''),
          tempspreparation_recette:new FormControl(''),
          tempscuisson_recette:new FormControl(''),
          tempstotal_recette:new FormControl(''),
          nbpersonne_recette:new FormControl(''),
          recettepremium_recette:new FormControl(''),
          id_utilisateur:new FormControl('1'),
        });

        this.formaddIngredient = this.formBuilder.group({
          id_ingredient:['',Validators.required],
          id_recette:['',Validators.required],
          quantiteingredient:['',Validators.required],


        })

  }
  create(){

    console.log(this.form.value);
    this.recetteService.saveRecette(this.form.value).subscribe(
      () =>{
        this.router.navigate(['postrecette']);
      }
    );
  }
  // onSelectChange(selectedIngredient: Recetteingredient) {
  //   const index = this.selectedIngredients.indexOf(selectedIngredient);
  //   this.selectedIngredients[index].id_ingredient = selectedIngredient.id_ingredient;
  // }
  // onSelectChange(ingredient: Ingredients) {
  //   if (this.selectedIngredients.includes(ingredient)) {
  //     let selectedIngredients = this.ingredient.filter(function(ingredient: { selected: boolean; }) {
  //       return ingredient.selected == true;
  //     });
  //   } else {
  //     this.selectedIngredients.push(ingredient);
  //   }
  // }
  // addIngredient() {
    // this.selectedIngredients.push({id_recetteingredients: 0, quantite: '', id_recette: 0, id_ingredient: 1})
  // }



  }



