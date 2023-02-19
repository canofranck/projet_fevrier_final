import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RecetteService } from "src/app/services/recette/recette.service";
import { ListIngredientComponent } from "../ingredients/list-ingredient/list-ingredient.component";

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
 export class RecetteComponent implements  OnInit{



  declare recettes : any [];
  constructor (private recetteService : RecetteService,
    private router : Router){

}
ngOnInit(): void {
  this.getRecettes();

}
getRecettes() {
  this.recetteService.findAllRecettes().subscribe(
    data =>{
      console.table(data);
        this.recettes = data as any[];
        console.log(this.recettes)
    }
  );
}
}

