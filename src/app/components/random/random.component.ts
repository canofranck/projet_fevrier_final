import { Component, OnInit } from '@angular/core';
import { GallerieService } from 'src/app/services/gallerie/gallerie.service';
import { RecetteService } from 'src/app/services/recette/recette.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements  OnInit{

  recettes: any[] = [];
  public randomRecettes: any[] = [];
  public i: number = 0;
  declare gallerie :any;
  constructor (
  private recetteService: RecetteService,
  private gallerieService : GallerieService,
  ){}
   ngOnInit(): void {

// this.getRecettes();
this.getRecettesRandom();
this.getGalleries();
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
