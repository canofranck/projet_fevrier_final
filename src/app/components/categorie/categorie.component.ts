import { Component, OnInit } from '@angular/core';
import { Recette } from 'src/app/models/recette/recette';
import { RecetteService } from 'src/app/services/recette/recette.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  declare recettes : any[];
  declare nombresRecettesParCategorie: any[];
  constructor (private recetteService : RecetteService,

    ){

}
  ngOnInit(): void {
    this.recetteService.findAllRecettes().subscribe(
      data =>{
        // console.table(data);
          this.recettes = data as any[];
          this.nombresRecettesParCategorie = this.compterRecettesParCategorie(this.recettes);
        console.log( this.nombresRecettesParCategorie )

      }
    );



  }

  compterRecettesParCategorie(recettes: any[]): any[] {
    const resultats = recettes.reduce((acc, recette) => {
      const categorie = recette.categorie_recette;
      if (categorie in acc) {
        acc[categorie]++;
      } else {
        acc[categorie] = 1;
      }
      return acc;
    }, {});
    return Object.entries(resultats).map(([categorie, nombre]) => ({ categorie, nombre }));
  }
  getCheminCategorie(categorie: string): string {
    return '/recettes/' + categorie;
  }

}



