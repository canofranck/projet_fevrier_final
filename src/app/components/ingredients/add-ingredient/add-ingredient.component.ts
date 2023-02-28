import { PostrecetteComponent } from './../../postrecette/postrecette.component';
import { Ingredients } from 'src/app/models/ingredients/ingredients';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';
import { RecetteService } from 'src/app/services/recette/recette.service';
// import { RecetteService } from 'src/app/services/recette/recette.service';
@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit{
  declare formaddIngredient: FormGroup;
  declare ingredient:Ingredients
 declare listeingredient : any ;
  // declare tableauingredient: [];
 @Input() addingree!: boolean;
 @Input() idrecetteencours! : number;


  @Output()
   public   cacheringre:EventEmitter<any> =new EventEmitter<any>();
   declare recettes : any ;
  //  idrecetteencours!: number;


  constructor (
    private ingredientService: IngredientsService,
    private formBuilder: FormBuilder,
    private router : Router,
    private recetteService: RecetteService,

  ){}
    ngOnInit(): void {
        this.formaddIngredient = this.formBuilder.group({
          id_ingredient:['',Validators.required],
          id_recette:['',Validators.required],
          quantiteingredient:['',Validators.required],


        })
        this.recetteService.findAllRecettes().subscribe(
          data =>{
          console.log(data);
              this.recettes = Object.values(data);
             this.recettes.sort((a: { date_recette: number; }, b: { date_recette: number; }) => (a.date_recette < b.date_recette ? 1 : -1))
              console.log(this.recettes);
             this.idrecetteencours=this.recettes[0].id_recette;
             console.log(" id recette avant le set"+this.idrecetteencours);
              this.recetteService.setIdRecetteEncours( this.idrecetteencours);
              console.log(" id recette en cours dans affiche ingredient"+this.idrecetteencours);
            }
        )
        this.ingredientService.findAllIngredients().subscribe(
          data =>{
            console.table(data);
              this.listeingredient = data;
          }
        )
        // this.idrecetteencours= this.recetteService.getIdRecetteEncours();
        // console.log("testtttttttt" + this.idrecetteencours);
        // console.log(" addingred true or false : "+this.addingree)
  }
  create(){
    console.log(" id recette debut de create "+this.idrecetteencours)
    const formValues = this.formaddIngredient.value;
    const ingredient = new Ingredients();

      ingredient.id_ingredient = this.formaddIngredient.value.id_ingredient;
      ingredient.id_recette = this.idrecetteencours;
      ingredient.quantiteingredient = this.formaddIngredient.value.quantiteingredient;
      console.log(" id recette avant submit"+this.idrecetteencours)
      this.ingredientService.saveIngredient(ingredient).subscribe((response) => {
        console.log(response);
          this.formaddIngredient.reset();
          this.listeingredient.push(response as Ingredients);
        //

       });
       }
       cahingre(){
        this.cacheringre.emit({});
       }
      }



//// test

