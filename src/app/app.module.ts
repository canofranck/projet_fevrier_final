import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbonnementComponent } from './components/abonnement/abonnement.component';
import { AddAbonnementComponent } from './components/abonnement/add-abonnement/add-abonnement.component';
import { EditAbonnementComponent } from './components/abonnement/edit-abonnement/edit-abonnement.component';
import { ListAbonnementComponent } from './components/abonnement/list-abonnement/list-abonnement.component';
import { AdminComponent } from './components/admin/admin.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { AddCommentaireComponent } from './components/commentaire/add-commentaire/add-commentaire.component';
import { CommentaireComponent } from './components/commentaire/commentaire.component';
import { EditCommentaireComponent } from './components/commentaire/edit-commentaire/edit-commentaire.component';
import { ListCommentaireComponent } from './components/commentaire/list-commentaire/list-commentaire.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddEtapeComponent } from './components/etape/add-etape/add-etape.component';
import { EditEtapeComponent } from './components/etape/edit-etape/edit-etape.component';
import { EtapeComponent } from './components/etape/etape.component';
import { ListEtapeComponent } from './components/etape/list-etape/list-etape.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ImagerecetteComponent } from './components/imagerecette/imagerecette.component';
import { AddIngredientComponent } from './components/ingredients/add-ingredient/add-ingredient.component';
import { EditIngredientComponent } from './components/ingredients/edit-ingredient/edit-ingredient.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { ListIngredientComponent } from './components/ingredients/list-ingredient/list-ingredient.component';
import { LastrecipesComponent } from './components/lastrecipes/lastrecipes.component';
import { PopulaireComponent } from './components/populaire/populaire.component';
import { PostrecetteComponent } from './components/postrecette/postrecette.component';
import { RandomComponent } from './components/random/random.component';
import { AddRecetteComponent } from './components/recette/add-recette/add-recette.component';
import { EditRecetteComponent } from './components/recette/edit-recette/edit-recette.component';
import { ListRecetteComponent } from './components/recette/list-recette/list-recette.component';
import { RecetteComponent } from './components/recette/recette.component';
import { TendanceComponent } from './components/tendance/tendance.component';

import { AddUtilisateurComponent } from './components/utilisateur/add-utilisateur/add-utilisateur.component';
import { EditUtilisateurComponent } from './components/utilisateur/edit-utilisateur/edit-utilisateur.component';
import { ListUtilisateurComponent } from './components/utilisateur/list-utilisateur/list-utilisateur.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';

import { ListGallerieComponent } from './components/list-gallerie/list-gallerie.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';


import { AddRecetteingredientComponent } from './components/recetteingredient/add-recetteingredient/add-recetteingredient/add-recetteingredient.component';
import { ListRecetteingredientComponent } from './components/recetteingredient/list-recetteingredient/list-recetteingredient/list-recetteingredient.component';
import { EditRecetteingredientComponent } from './components/recetteingredient/edit-recetteingredient/edit-recetteingredient/edit-recetteingredient.component';
import { RecetteparcategorieComponent } from './recetteparcategorie/recetteparcategorie.component';



@NgModule({
  declarations: [
    AppComponent,
    RecetteComponent,
    HeaderComponent,
    FooterComponent,
    LastrecipesComponent,
    CategorieComponent,
    PopulaireComponent,
    TendanceComponent,
    RandomComponent,
    HomeComponent,
    ContactComponent,
    PostrecetteComponent,
    IngredientsComponent,
    AbonnementComponent,
    CommentaireComponent,
    EtapeComponent,
    ImagerecetteComponent,
    UtilisateurComponent,
    AddUtilisateurComponent,
    EditUtilisateurComponent,
    ListUtilisateurComponent,
    ListRecetteComponent,
    AddRecetteComponent,
    EditRecetteComponent,
    AddAbonnementComponent,
    EditAbonnementComponent,
    ListAbonnementComponent,
    AddCommentaireComponent,
    EditCommentaireComponent,
    ListCommentaireComponent,
    AdminComponent,
    AddEtapeComponent,
    EditEtapeComponent,
    ListEtapeComponent,
    AddIngredientComponent,
    EditIngredientComponent,
    ListIngredientComponent,
    UploadFileComponent,
    ListGallerieComponent,
   
    AddRecetteingredientComponent,
    ListRecetteingredientComponent,
    EditRecetteingredientComponent,
    RecetteparcategorieComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
