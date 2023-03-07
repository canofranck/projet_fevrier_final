import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { RecetteService } from 'src/app/services/recette/recette.service';

@Component({
  selector: 'app-lastrecipes',
  templateUrl: './lastrecipes.component.html',
  styleUrls: ['./lastrecipes.component.css']
})
export class LastrecipesComponent implements OnInit {
  recettes: any[] = [];
  public lastRecettes :  any[] = [];

  public i: number = 0;
  constructor (
  private recetteService: RecetteService,
  ){}

  ngOnInit(): void {
    this.getLastRecettes() ;
  }
  getLastRecettes() {
    this.recetteService.findAllRecettes().subscribe(
      data => {
        this.recettes = data as any[];
        console.table(this.recettes);

        // Tri des recettes par date décroissante
        this.recettes.sort((a, b) => new Date(b.date_recette).getTime() - new Date(a.date_recette).getTime());

        // Sélection des 5 dernières recettes
        const lastRecettes = this.recettes.slice(0, 5);
        this.lastRecettes=lastRecettes;
        console.table(lastRecettes);
      }
    );
  }
}
