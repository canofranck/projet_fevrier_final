import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recette } from 'src/app/models/recette/recette';
import { RecetteService } from 'src/app/services/recette/recette.service';

@Component({
  selector: 'app-recetteparcategorie',
  templateUrl: './recetteparcategorie.component.html',
  styleUrls: ['./recetteparcategorie.component.css']
})
export class RecetteparcategorieComponent implements OnInit {
  declare recettes : any[];
  declare categorie: string;
  declare recettesFiltrees: Recette[];

  constructor(private recetteService: RecetteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categorie = params.get('categorie')??'';
      this.recetteService.findAllRecettes().subscribe(
        data =>{
          // console.table(data);
            this.recettes = data as any[];
            console.log(this.recettes);
            this.recettesFiltrees = this.recettes.filter((recette: Recette) => recette.categorie_recette === this.categorie);
            console.log(this.recettesFiltrees);
        }
      );
    });
  }
}
