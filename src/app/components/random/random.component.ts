import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GallerieService } from 'src/app/services/gallerie/gallerie.service';
import { RecetteService } from 'src/app/services/recette/recette.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements  OnInit{

  recettes: any[] = []; // Tableau pour stocker toutes les recettes
  public randomRecettes: any[] = []; // Tableau pour stocker les recettes aléatoires
  public i: number = 0;  // Variable pour le compteur
  declare gallerie :any; // Déclaration de la galerie
  isCalledFromHome = false;  // Booléen pour vérifier si l'utilisateur arrive depuis la page d'accueil

  constructor (
  private recetteService: RecetteService,
  private gallerieService : GallerieService,
  private route: ActivatedRoute
  ){}
   ngOnInit(): void {

// this.getRecettes();
this.getRecettesRandom(); // Récupération des recettes aléatoires
this.getGalleries(); // Récupération de la galerie

const url = this.route.snapshot.url.join('/');
this. isCalledFromHome = url.includes('recetterandom');

console.log(this.isCalledFromHome);
   }

   getRecettes() {
    this.recetteService.findAllRecettes().subscribe(
      data =>{
        // console.table(data);
          this.recettes = data as any[];
        //  console.table(this.recettes)
            }
    );

}
getRecettesRandom() {
  this.recetteService.findAllRecettes().subscribe(
    data => {
      this.recettes = data as any[];
      //  console.table(this.recettes);
      let randomRecettes: any[] = [];
      //  La boucle while sélectionne une recette aléatoire et vérifie si elle n'a pas encore été ajoutée au tableau randomRecettes
      while (randomRecettes.length < 3) {
        let randomIndex = Math.floor(Math.random() * this.recettes.length);
        let randomRecette = this.recettes[randomIndex];
        if (!randomRecettes.includes(randomRecette)) {
          randomRecettes.push(randomRecette);
        }
      }
      this.randomRecettes = randomRecettes;


    }
  );

}
getGalleries() {
  this.gallerieService.findAllGalleries().subscribe(
     (data=>{
       this.gallerie = data;
// console.log(this.gallerie);
     }
       )

   )
 }
}
