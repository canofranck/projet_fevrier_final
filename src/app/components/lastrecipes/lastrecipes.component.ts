import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Gallerie } from 'src/app/models/gallerie/gallerie';
import { Recette } from 'src/app/models/recette/recette';
import { GallerieService } from 'src/app/services/gallerie/gallerie.service';
import { RecetteService } from 'src/app/services/recette/recette.service';

@Component({
  selector: 'app-lastrecipes',
  templateUrl: './lastrecipes.component.html',
  styleUrls: ['./lastrecipes.component.css']
})
export class LastrecipesComponent implements AfterViewInit{
  recettes!: Recette[];
  lastRecettes :  Recette[]=[];
  // public listGalerie : { id_gallerie: number, id_recette : number,galleriefilename : string, id_utilisateur: number}[]= [];
  public i: number = 0;
  declare gallerie :any;
  // public  affichegallerie: any[] = [];
  // declare recetteSelectionnee : Recette;
  constructor (
  private recetteService: RecetteService,
  private gallerieService : GallerieService,
  private router: Router,
   private route: ActivatedRoute
  ){}


  ngAfterViewInit(): void {
    this.getLastRecettes() ;  // Appel à la méthode pour récupérer les dernières recettes
    this.getGalleries(); // Appel à la méthode pour récupérer les galeries d'images
    // Abonnement à l'événement de fin de navigation pour recharger la liste des dernières recettes
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
    .subscribe(() => {
      // recharger la liste des dernières recettes
      this.getLastRecettes();
    });
  }
    // Méthode pour récupérer les dernières recettes
  getLastRecettes() {
    this.recetteService.findAllRecettes().subscribe(
      data => {
        this.recettes = data as Recette[];



        // Tri des recettes par date décroissante
        this.recettes.sort((a, b) => new Date(b.date_recette).getTime() - new Date(a.date_recette).getTime());

        // Sélection des 5 dernières recettes
        const lastRecettes = this.recettes.slice(0, 5);

       this.lastRecettes= lastRecettes;
      //  console.table(this.lastRecettes);




      }
    );
  }
 // Méthode pour récupérer les galeries d'images
  getGalleries() {
   this.gallerieService.findAllGalleries().subscribe(
      (data=>{
        this.gallerie = data;

      }
        )

    )
  }
}
