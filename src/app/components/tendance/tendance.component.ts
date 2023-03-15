import { CommentaireService } from './../../services/commentaire/commentaire.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { GallerieService } from 'src/app/services/gallerie/gallerie.service';
import { RecetteService } from 'src/app/services/recette/recette.service';
import { Recette } from 'src/app/models/recette/recette';
import { filter } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Commentaire } from 'src/app/models/commentaire/commentaire';

@Component({
  selector: 'app-tendance',
  templateUrl: './tendance.component.html',
  styleUrls: ['./tendance.component.css']
})
export class TendanceComponent implements OnInit {
  recettes: any[] = [];

  public randomRecettes: any[] = [];
  public i: number = 0;
  declare gallerie :any;
  topRecettes: any[]=[];


  constructor (
  private recetteService: RecetteService,
  private gallerieService : GallerieService,

  private router: Router,
  private route: ActivatedRoute,
  ){}
  ngOnInit(): void {
    // this.getTopCommentaires();
this.getRecettestendance();
    this.getGalleries();
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
    .subscribe(() => {
      // recharger la liste des dernières recettes

    });
       }




    getRecettestendance() {
      this.recetteService.findAllRecettes().subscribe(
        data => {
          const recettes = data as Recette[];
          const topRecettes = recettes.sort((a, b) => b.nbvuerecette - a.nbvuerecette).slice(0, 3);
          this.topRecettes=topRecettes;
          console.log(topRecettes); // afficher les 5 recettes les plus vues
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
