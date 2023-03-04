import { Ingredients } from './../../models/ingredients/ingredients';
import { Recette } from './../../models/recette/recette';
import { CommentaireService } from './../../services/commentaire/commentaire.service';
import { Commentaire } from './../../models/commentaire/commentaire';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RecetteService } from "src/app/services/recette/recette.service";
import { ListIngredientComponent } from "../ingredients/list-ingredient/list-ingredient.component";

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
 export class RecetteComponent implements  OnInit{
 declare formaddCommentaire: FormGroup;
 declare idrecetteencours : number;
declare affiche : any[];
declare recetteSelectionnee : Recette;
  declare recettes : any [];
  public listIngredient: { id_ingredient: number; quantiteingredient: string; }[]=[];
  public listEtape: { id_etape: number; id_recette : number;numero_etape : number; instructuions_etape: string;image_etape:string  }[]=[];
 public  list: any[] = [];
 public  affichetape: any[] = [];
  form: any;

  constructor (private recetteService : RecetteService,
    private router : Router,
    private commentaireserivce: CommentaireService,
    private formBuilder: FormBuilder,
    ){

}
ngOnInit(): void {
   this.getRecettes();
  this.formaddCommentaire = this.formBuilder.group({
    id_commentaire:['',Validators.required],
    commentaire:['',Validators.required],
    imagecommentaire:['',Validators.required],
    notecommentaire:['',Validators.required],
    datecommentaire:['',Validators.required],
    id_utilisateur:['',Validators.required],
    id_recette:['',Validators.required],

    });


}
getRecettes() {
  this.recetteService.findAllRecettes().subscribe(
    data =>{
      // console.table(data);
        this.recettes = data as any[];
       console.table(this.recettes)
      //  const affiche: any[] =this.recettes.slice(4,5)
       const idrecetteselectionner = 6; // Mettez ici l'id de la recette sélectionnée
       this.getRecetteById(idrecetteselectionner);

  // console.table(affiche);

    }
  );

}
create() {



  const commentaire = new Commentaire();

     commentaire.commentaire=this.form.value.commentaire;
      commentaire.datecommentaire=new Date();
      commentaire.notecommentaire='10';
      commentaire.id_recette=1;
      commentaire.id_utilisateur=1;

  console.log(this.form.value);

   this.commentaireserivce.saveCommentaire(this.form.value).subscribe(
    () =>{

      // this.router.navigate(['postrecette']);
    }
   );

}
getRecetteById(idRecette: number) {
  const recetteSelectionnee = this.recettes.find(recette => recette.id_recette === idRecette);
  console.table(recetteSelectionnee);
  console.table(recetteSelectionnee.listIngredient)
  console.log(recetteSelectionnee.description_recette)
  console.log(recetteSelectionnee.categorie_recette)
  this.recetteSelectionnee = recetteSelectionnee;
  this.listIngredient = this.convertToList(recetteSelectionnee.listIngredient);
  this.listEtape=this.convertToListetape(recetteSelectionnee.listeEtape)
  console.table(this.listIngredient);
  console.table(this.listEtape);
}
convertToList(listIngredient: {id_ingredient: number, quantiteingredient: string}[]): any[] {

  for(let i = 0; i < listIngredient.length; i++) {
    let ingredient = {id_ingredient: listIngredient[i].id_ingredient, quantiteingredient: listIngredient[i].quantiteingredient};
    this.list.push(ingredient);
  }
  return this.list;
}
convertToListetape(listEtape: { id_etape: number, id_recette : number,numero_etape : number, instructions_etape: string,image_etape:string}[]): any[] {

  for(let i = 0; i < listEtape.length; i++) {
    let afficheetape = {id_ingredient: listEtape[i].id_etape,numero_etape: listEtape[i].instructions_etape};
    this.list.push(afficheetape);
  }
  return this.list;
}
}

