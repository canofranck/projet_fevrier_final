import { Ingredients } from './../../models/ingredients/ingredients';
import { Recette } from './../../models/recette/recette';
import { CommentaireService } from './../../services/commentaire/commentaire.service';
import { Commentaire } from './../../models/commentaire/commentaire';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RecetteService } from "src/app/services/recette/recette.service";
import { ListIngredientComponent } from "../ingredients/list-ingredient/list-ingredient.component";
import { GallerieService } from 'src/app/services/gallerie/gallerie.service';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
 export class RecetteComponent implements  OnInit{
 declare formaddCommentaire: FormGroup;
 declare form : FormGroup;
 declare idrecetteencours : number;
declare affiche : any[];
declare recetteSelectionnee : Recette;
  declare recettes : any [];
  public listIngredient: { id_ingredient: number; quantiteingredient: string; }[]=[];
  public listEtape: { id_etape: number; id_recette : number;numero_etape : number; instructions_etape: string;image_etape:string  }[]=[];
  public listGalerie : { id_gallerie: number, id_recette : number,galleriefilename : string, id_utilisateur: number}[]= [];
  public  list: any[] = [];
 public  affichetape: any[] = [];
 declare commentaire:Commentaire;
 declare gallerie : any [];
 public  affichegallerie: any[] = [];
declare idrecetteselectionner:number;
  public recette!: Recette;

  formeditRecette: any;
  constructor (private recetteService : RecetteService,
    private router : Router,
    private commentaireserivce: CommentaireService,
    private formBuilder: FormBuilder,
    private gallerieService : GallerieService,
    private route: ActivatedRoute,
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

    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.idrecetteselectionner = +id;
      console.log(id);
      this.recetteService.editRecette(this.idrecetteselectionner).subscribe(
        data => {
          console.log(data)
         
          this.recette = data as Recette;
          console.log(this.recette.nbvuerecette);
          this.recette.nbvuerecette += 1;
          console.log(this.recette.nbvuerecette);
          console.log(this.recette);
          this.recetteService.updateRecette(this.recette).subscribe(
            () => {


            }
          )
        }
      )
    }

    this.getRecettes();


}
getRecettes() {
  this.recetteService.findAllRecettes().subscribe(
    data =>{
      // console.table(data);
        this.recettes = data as any[];
      //  console.table(this.recettes)
      //  const affiche: any[] =this.recettes.slice(4,5)
//const idrecetteselectionner = 11; // Mettez ici l'id de la recette sélectionnée
       this.getRecetteById(this.idrecetteselectionner);

  // console.table(affiche);

    }
  );

}
create() {

  const formValues = this.formaddCommentaire.value;

  const commentairepost = new Commentaire();

  commentairepost.commentaire=this.formaddCommentaire.value.commentaire;
  commentairepost.datecommentaire=new Date();
  commentairepost.notecommentaire='10';
  commentairepost.id_recette=1;
  commentairepost.id_utilisateur=1;

  // console.log(this.formaddCommentaire.value);
  // console.log(commentairepost)

   this.commentaireserivce.saveCommentaire(commentairepost).subscribe(
    () =>{

      // this.router.navigate(['postrecette']);
    }
   );

}
getRecetteById(idRecette: number) {
  const recetteSelectionnee = this.recettes.find(recette => recette.id_recette === idRecette);
  // console.table(recetteSelectionnee);
  // console.table(recetteSelectionnee.listIngredient);
   console.table(recetteSelectionnee.listEtape);

  this.recetteSelectionnee = recetteSelectionnee;
  this.listIngredient = this.convertToList(recetteSelectionnee.listIngredient);
  this.listEtape=this.convertToListetape(recetteSelectionnee.listEtape);
 this.listGalerie=this.convertToListgalerie(recetteSelectionnee.listGalerie);

  // console.table(this.listIngredient);
  // console.table(this.listEtape);
  // console.table( this.list)
  // console.table (this.affichetape)
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
    let etape = {id_etape: listEtape[i].id_etape,  id_recette : listEtape[i].id_recette ,numero_etape: listEtape[i].numero_etape,instructions_etape:listEtape[i].instructions_etape ,image_etape:listEtape[i].image_etape};
    this.affichetape.push(etape);
  }
  return this.affichetape;
}
convertToListgalerie(listGalerie: { id_gallerie: number, id_recette : number,galleriefilename : string, id_utilisateur: number}[]): any[] {

  for(let i = 0; i <listGalerie.length; i++) {
    let gallerie = {id_gallerie: listGalerie[i].id_gallerie,  id_recette : listGalerie[i].id_recette, galleriefilename: listGalerie[i].galleriefilename, id_utilisateur:listGalerie[i]. id_utilisateur};
    this.affichegallerie.push(gallerie);
  }
  return this.affichegallerie;
}


}

