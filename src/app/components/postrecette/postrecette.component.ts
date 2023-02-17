import { Recetteingredient } from 'src/app/models/recetteingredient/recetteingredient';
import { Ingredients } from 'src/app/models/ingredients/ingredients';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Gallerie } from 'src/app/models/gallerie/gallerie';
import { GallerieService } from 'src/app/services/gallerie/gallerie.service';
import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';
import { RecetteService } from 'src/app/services/recette/recette.service';
import { RecetteingredientService } from 'src/app/services/recetteingredient/recetteingredient.service';

@Component({
  selector: 'app-postrecette',
  templateUrl: './postrecette.component.html',
  styleUrls: ['./postrecette.component.css']
})

export class PostrecetteComponent implements OnInit{
  declare form: FormGroup;
  declare ingredient : any ;
  selectedIngredients: Recetteingredient[] = [{id_recetteingredients:0, quantite:'' , id_recette:0 , id_ingredient: 0}];
  ingredientList: { ingredient: string, quantity: number }[] = [];
  declare formaddRecetteIngredient: FormGroup;
  declare compteur:number ;
declare item : Ingredients[];
declare item2 :Recetteingredient;
showForm = true;
submitButtonText = 'Envoyer';
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
        this.ingredientService.findAllIngredients().subscribe(
          data =>{
            console.table(data);
              this.ingredient = data;
          }
        )
        this.formaddRecetteIngredient = this.formBuilder.group({
          id_recetteingredients:['',Validators.required],
        quantite:['',Validators.required],
         id_recette:['1',Validators.required],
         id_ingredient:['',Validators.required],

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
  onSubmit() {
    console.log('Form submitted:', this.selectedIngredients);

    this.showForm = false;
    this.submitButtonText = 'Ajouter un ingrédient';
  }

  toggleForm() {
    this.showForm = true;
    this.submitButtonText = 'Envoyer';
  }
  onSelectChange(item: Recetteingredient) {
    console.log('Selected ingredient:', item.id_ingredient);
  }
  removeIngredient (){};
  addIngredient() {

    console.log()
    // this.selectedIngredients.push({
    //   id_ingredient: 1, quantite: '',
    //   id_recetteingredients: 0,
    //   id_recette: 0
    // });
  }
}
// dernier test

