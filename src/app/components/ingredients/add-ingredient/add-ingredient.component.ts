import { PostrecetteComponent } from './../../postrecette/postrecette.component';
import { Ingredients } from 'src/app/models/ingredients/ingredients';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit{
  declare formaddIngredient: FormGroup;
  declare ingredient:Ingredients
  declare listeingredient : any ;
  declare tableauingredient: [];
  @Input()
  addingree!: boolean;
  @Input()
  idrecetteencourss! : number;

  @Output()
   public   cacheringre:EventEmitter<any> =new EventEmitter<any>();

  constructor (
    private ingredientService: IngredientsService,
    private formBuilder: FormBuilder,
    private router : Router,

  ){}
    ngOnInit(): void {
        this.formaddIngredient = this.formBuilder.group({
          id_ingredient:['',Validators.required],
          id_recette:['',Validators.required],
          quantiteingredient:['',Validators.required],


        })
        this.ingredientService.findAllIngredients().subscribe(
          data =>{
            console.table(data);
              this.listeingredient = data;
          }
        )
        console.log(" id recette dans ingrdients"+this.idrecetteencourss)
        console.log(" addingred true or false : "+this.addingree)
  }
  create(){

    const formValues = this.formaddIngredient.value;
    const ingredient = new Ingredients();

      ingredient.id_ingredient = this.formaddIngredient.value.id_ingredient;
      ingredient.id_recette = this.formaddIngredient.value.id_recetteidrecetteencours
      ingredient.quantiteingredient = this.formaddIngredient.value.quantiteingredient;
      console.log(" id recette dans ingrdients"+this.idrecetteencourss)
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

