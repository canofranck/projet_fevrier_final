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
  constructor (
  private recetteService: RecetteService,
  private gallerieService : GallerieService,
  ){}
   ngOnInit(): void {

// this.getRecettes();
this.getRecettesRandom();

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
       console.table(this.recettes);
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
console.log(randomRecettes);
console.log(randomRecettes[0].listGalerie.galleriefilename);
console.log(randomRecettes[0].titre_recette);
console.log(randomRecettes[0].description_recette);
console.log(randomRecettes[0].categorie_recette);
console.log(randomRecettes[0].nbpersonne_recette);
// et ainsi de suite pour les autres propriétés...

      for (let i = 0; i < this.randomRecettes.length; i++) {
        if (this.randomRecettes[i].listGalerie.hasOwnProperty('galleriefilename')) {
          console.table(this.randomRecettes[i].listGalerie.galleriefilename);
        } else {
          console.log('galleriefilename non définie pour la recette ' + this.randomRecettes[i].id_recette);
        }
        console.log(randomRecettes[i].listGalerie);
      }
      console.table(randomRecettes[0].listEtape.numero_etape);
      console.table(randomRecettes[1].listIngredient.id_ingredient);
      console.table(randomRecettes[2].listGalerie.galleriefilename);

    }
  );

}

}
