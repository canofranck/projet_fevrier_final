import { Recetteingredient } from 'src/app/models/recetteingredient/recetteingredient';

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';
import { RecetteService } from 'src/app/services/recette/recette.service';
import { Recette } from 'src/app/models/recette/recette';
import { concatMap, delay } from 'rxjs';


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
  idrecetteencours!: number;
  declare form2:  FormGroup;
  declare recette: Recette;
  declare recette2: Recette
  // @Input() idrecetteencours! : number;



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
//         const recette = new Recette();
//         recette.date_recette = new Date();
//         recette.titre_recette='';
//         recette. description_recette='';
//           recette.categorie_recette='';
//           recette.niveaudifficulte_recette='';
//           recette.tempspreparation_recette='';
//           recette.tempscuisson_recette='';
//           recette.tempstotal_recette='';
//           recette.nbpersonne_recette='';
//           recette.recettepremium_recette=false;
//           recette.id_utilisateur=1;
// console.log(this.recette);

//         // this.recetteService.saveRecette(recette).subscribe(
//         //   () =>{
//         //     // this.router.navigate(['postrecette']);
//         //   }

//         //  );
//         this.recetteService.saveRecette(recette).pipe(
//           concatMap(() => this.recetteService.findAllRecettes())
//         ).subscribe(
//           data =>{
//             console.log(data);
//             this.recettes = Object.values(data);
//             this.recettes.sort((a: { date_recette: number; }, b: { date_recette: number; }) => (a.date_recette < b.date_recette ? 1 : -1))
//             console.log(this.recettes);
//             this.idrecetteencours=this.recettes[0].id_recette;
//             console.log(" id recette avant le set"+this.idrecetteencours);
//             this.recetteService.setIdRecetteEncours( this.idrecetteencours);
//             console.log(" id recette en cours dans affiche ingredient"+this.idrecetteencours);
//           }
//         );
        this.form = this.formBuilder.group({
          id_recette :[''],
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
        })
        // console.table(this.form.value)

  }
  create(){
    // this.recetteService.getIdRecetteEncours();
    console.log(this.idrecetteencours)

    const formValues = this.form.value;
    const recette2 = new Recette();
    //  recette2.id_recette=this.idrecetteencours;
       recette2.titre_recette=this.form.value.titre_recette;
        recette2.date_recette=new Date();
         recette2. description_recette=this.form.value.description_recette;
          recette2.categorie_recette=this.form.value.categorie_recette;
          recette2.niveaudifficulte_recette=this.form.value.niveaudifficulte_recette;
          recette2.tempspreparation_recette=this.form.value.tempspreparation_recette;
          recette2.tempscuisson_recette=this.form.value.tempscuisson_recette;
          recette2.tempstotal_recette=this.form.value.tempstotal_recette;
          recette2.nbpersonne_recette=this.form.value.nbpersonne_recette;
          recette2.recettepremium_recette=this.form.value.recettepremium_recette;
          recette2.id_utilisateur=1;
          recette2.id_recette=this.idrecetteencours;
    console.log(this.form.value);
    console.log(this.idrecetteencours)
     this.recetteService.updateRecette2(this.form.value,this.idrecetteencours).subscribe(
      () =>{

         this.router.navigate(['']);
      }
     );
  }
  affingre() {
    this.addingre=true;
    console.log("affiche ingredient"+this.addingre);

    //  await delay(13000);
    // for (let i = 0; i < 20000; i++) {console.log(i);

    // }

        // this.recetteService.findAllRecettes().subscribe(
        //   data =>{
        //   console.log(data);
        //       this.recettes = Object.values(data);
        //      this.recettes.sort((a: { date_recette: number; }, b: { date_recette: number; }) => (a.date_recette < b.date_recette ? 1 : -1))
        //       console.log(this.recettes);
        //      this.idrecetteencours=this.recettes[0].id_recette;
        //      console.log(" id recette avant le set"+this.idrecetteencours);
        //       this.recetteService.setIdRecetteEncours( this.idrecetteencours);
        //       console.log(" id recette en cours dans affiche ingredient"+this.idrecetteencours);
        //     }
        // )
        const recette = new Recette();
        recette.date_recette = new Date();
        recette.titre_recette='';
        recette. description_recette='';
          recette.categorie_recette='';
          recette.niveaudifficulte_recette='';
          recette.tempspreparation_recette='';
          recette.tempscuisson_recette='';
          recette.tempstotal_recette='';
          recette.nbpersonne_recette='';
          recette.recettepremium_recette=false;
          recette.id_utilisateur=1;
console.log(this.recette);

        // this.recetteService.saveRecette(recette).subscribe(
        //   () =>{
        //     // this.router.navigate(['postrecette']);
        //   }

        //  );
        this.recetteService.saveRecette(recette).pipe(
          concatMap(() => this.recetteService.findAllRecettes())
        ).subscribe(
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
        );


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




