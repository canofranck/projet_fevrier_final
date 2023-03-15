import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Recette } from 'src/app/models/recette/recette';
import { GallerieService } from 'src/app/services/gallerie/gallerie.service';
import { RecetteService } from 'src/app/services/recette/recette.service';


@Component({
  selector: 'app-populaire',
  templateUrl: './populaire.component.html',
  styleUrls: ['./populaire.component.css']
})
export class PopulaireComponent  implements AfterViewInit{
  recettes: any[] = [];

  public randomRecettes: any[] = [];
  public i: number = 0;
  declare gallerie :any;
  popRecettes: any[]=[];


  constructor (
  private recetteService: RecetteService,
  private gallerieService : GallerieService,

  private router: Router,
  private route: ActivatedRoute,
  ){}
  ngAfterViewInit(): void {
    // this.getTopCommentaires();
this.getRecettespopulaire();
    this.getGalleries();
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
    .subscribe(() => {
      console.log('Redirection effectuée !');
      // recharger la liste des dernières recettes
      this.getRecettespopulaire();
    });
       }




    getRecettespopulaire() {
      this.recetteService.findAllRecettes().subscribe(
        data => {
          const recettes = data as Recette[];
          const popRecettes = recettes.sort((a, b) => b.nblike - a.nblike).slice(0, 3);
          this.popRecettes=popRecettes;
          console.log(popRecettes); // afficher les 5 recettes les plus vues
        },
        error => {
          console.log(error);
        }
      );
    }


    getGalleries() {
      this.gallerieService.findAllGalleries().subscribe(
         (data=>{
           this.gallerie = data;
    console.log(this.gallerie);
         }
           )

       )
     }
    }
