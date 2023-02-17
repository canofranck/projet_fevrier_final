import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Recette } from "src/app/models/recette/recette";
import { AppSettings } from "src/app/settings/app.settings";


// @Injectable({providedIn: 'root'})
@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  httpOptions={
    headers : new HttpHeaders({'content-Type': 'application/json'})
  }
  constructor(private http:HttpClient) {}
  findAllRecettes(){
    return this.http.get(AppSettings.APP_URL+"/recette");
  }
  saveRecette (recette:Recette){
    return this.http.post(AppSettings.APP_URL+"/recette",JSON.stringify(recette),this.httpOptions);
  }

  editRecette(id_recette:number){
    return this.http.get(AppSettings.APP_URL+"/recette/"+id_recette)
   }

   updateRecette(recette:Recette){
    return this.http.put(AppSettings.APP_URL+"/recettes/"+recette.id_recette,JSON.stringify(recette),this.httpOptions);
   }

   deleteRecette(id:number){
    return this.http.delete(AppSettings.APP_URL+"/recettes/"+id);
   }
   addIngredientToRecette(recetteId: number, ingredientId: number): Observable<any> {
    return this.http.post<any>(AppSettings.APP_URL + '/recettes/' + recetteId + '/ingredients/' + ingredientId, {});
  }
  }
