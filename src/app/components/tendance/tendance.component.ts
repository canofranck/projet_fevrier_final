import { CommentaireService } from './../../services/commentaire/commentaire.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { GallerieService } from 'src/app/services/gallerie/gallerie.service';
import { RecetteService } from 'src/app/services/recette/recette.service';
import { Recette } from 'src/app/models/recette/recette';
import { filter } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tendance',
  templateUrl: './tendance.component.html',
  styleUrls: ['./tendance.component.css']
})
export class TendanceComponent implements OnInit {
  recettes: any[] = [];
  commentaires: any[] = [];
  public randomRecettes: any[] = [];
  public i: number = 0;
  declare gallerie :any;
  topRecettes: any[]=[];
  topCommentaire: any[]=[];

  constructor (
  private recetteService: RecetteService,
  private gallerieService : GallerieService,
  private commentaireService:CommentaireService,
  private router: Router,
  private route: ActivatedRoute,
  ){}
  ngOnInit(): void {
    this.getRecettestendance();
    this.getGalleries();
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
    .subscribe(() => {
      // recharger la liste des dernières recettes
      this. getRecettestendance();
    });
       }

    getRecettestendance() {
      this.commentaireService.findAllCommentaire().subscribe(
        data => {
          const commentaires = data as any[];
          console.table(commentaires);

          // Trier les commentaires selon la note de la plus grande à la plus petite
          commentaires.sort((a, b) => b.notecommentaire - a.notecommentaire);

          // Sélectionner les 5 meilleurs commentaires
          const topCommentaires = commentaires.slice(0, 5);
          console.table(topCommentaires)

          console.log(topCommentaires[0].notecommentaire);
          this.topCommentaire=topCommentaires;
          // Récupérer les recettes correspondantes aux meilleurs commentaires
          const idRecettes = topCommentaires.map(commentaire => commentaire.id_recette);
          this.recetteService.findAllRecettes().subscribe(
            data => {
              const recettes = data as Recette[];

              // Trier les recettes selon l'ordre des meilleurs commentaires
              const topRecettes = recettes.filter(recette => idRecettes.includes(recette.id_recette));

              // Stocker les 5 meilleures recettes dans topRecettes
              this.topRecettes = topRecettes.slice(0, 5);
              console.table(this.topRecettes)
            }
          );
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
