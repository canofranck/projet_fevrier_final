import { RecetteparcategorieComponent } from './recetteparcategorie/recetteparcategorie.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AbonnementComponent } from "./components/abonnement/abonnement.component";
import { AddAbonnementComponent } from "./components/abonnement/add-abonnement/add-abonnement.component";
import { EditAbonnementComponent } from "./components/abonnement/edit-abonnement/edit-abonnement.component";
import { ListAbonnementComponent } from "./components/abonnement/list-abonnement/list-abonnement.component";
import { AddCommentaireComponent } from "./components/commentaire/add-commentaire/add-commentaire.component";
import { CommentaireComponent } from "./components/commentaire/commentaire.component";
import { EditCommentaireComponent } from "./components/commentaire/edit-commentaire/edit-commentaire.component";
import { ListCommentaireComponent } from "./components/commentaire/list-commentaire/list-commentaire.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AddEtapeComponent } from "./components/etape/add-etape/add-etape.component";
import { EditEtapeComponent } from "./components/etape/edit-etape/edit-etape.component";
import { EtapeComponent } from "./components/etape/etape.component";
import { ListEtapeComponent } from "./components/etape/list-etape/list-etape.component";
import { HomeComponent } from "./components/home/home.component";
import { AddIngredientComponent } from "./components/ingredients/add-ingredient/add-ingredient.component";
import { EditIngredientComponent } from "./components/ingredients/edit-ingredient/edit-ingredient.component";
import { IngredientsComponent } from "./components/ingredients/ingredients.component";
import { ListIngredientComponent } from "./components/ingredients/list-ingredient/list-ingredient.component";
import { ListGallerieComponent } from "./components/list-gallerie/list-gallerie.component";
import { PostrecetteComponent } from "./components/postrecette/postrecette.component";
import { AddRecetteComponent } from "./components/recette/add-recette/add-recette.component";
import { EditRecetteComponent } from "./components/recette/edit-recette/edit-recette.component";
import { ListRecetteComponent } from "./components/recette/list-recette/list-recette.component";
import { RecetteComponent } from "./components/recette/recette.component";
import { AddRecetteingredientComponent } from "./components/recetteingredient/add-recetteingredient/add-recetteingredient/add-recetteingredient.component";
import { EditRecetteingredientComponent } from "./components/recetteingredient/edit-recetteingredient/edit-recetteingredient/edit-recetteingredient.component";
import { ListRecetteingredientComponent } from "./components/recetteingredient/list-recetteingredient/list-recetteingredient/list-recetteingredient.component";
import { UploadFileComponent } from "./components/upload-file/upload-file.component";

import { AddUtilisateurComponent } from "./components/utilisateur/add-utilisateur/add-utilisateur.component";
import { EditUtilisateurComponent } from "./components/utilisateur/edit-utilisateur/edit-utilisateur.component";
import { ListUtilisateurComponent } from "./components/utilisateur/list-utilisateur/list-utilisateur.component";
import { UtilisateurComponent } from "./components/utilisateur/utilisateur.component";
import { RecettesearchComponent } from './recettesearch/recettesearch.component';
import { RandomComponent } from './components/random/random.component';


const routes: Routes = [
  {path:'',component:HomeComponent  },
  {path:'recette',component:RecetteComponent  },
  {path:'contact',component:ContactComponent },
  {path:'postrecette',component:PostrecetteComponent },
  {path:'ingredients',component:IngredientsComponent},

  {path:'utilisateur',component:UtilisateurComponent},
  {path:'utilisateur/:id',component:ListUtilisateurComponent},
  {path:'addutilisateur',component:AddUtilisateurComponent},
  {path:'editutilisateur/:id',component:EditUtilisateurComponent},
  // {path:'listutilisateur',component:ListUtilisateurComponent},
  {path:'recette',component:RecetteComponent},
  {path:'recette/:id',component:RecetteComponent},
  {path:'addrecette',component:AddRecetteComponent},
  {path:'editrecette/:id',component:EditRecetteComponent},
  {path:'listrecette',component:ListRecetteComponent},
  {path:'recettes/:categorie',component:RecetteparcategorieComponent},
  {path:'recettesearch',component:RecettesearchComponent},
  {path:'recettelast',component:RandomComponent},

  {path:'abonnement',component:AbonnementComponent},
  {path:'abonnement/:id',component:ListAbonnementComponent},
  {path:'addabonnement',component:AddAbonnementComponent},
  {path:'editabonnement/:id',component:EditAbonnementComponent},
  {path:'listabonnement',component:ListAbonnementComponent},

  {path:'commentaire',component:CommentaireComponent},
  {path:'commentaire/:id',component:ListCommentaireComponent},
  {path:'addcommentaire',component:AddCommentaireComponent},
  {path:'editcommentaire/:id',component:EditCommentaireComponent},
  {path:'listcommentaire',component:ListCommentaireComponent},

  {path:'etape',component:EtapeComponent},
  {path:'etape/:id',component:ListEtapeComponent},
  {path:'addetape',component:AddEtapeComponent},
  {path:'editetape/:id',component:EditEtapeComponent},
  {path:'listetape',component:ListEtapeComponent},

  {path:'ingredient',component:IngredientsComponent},
  {path:'ingredient/:id',component:ListIngredientComponent},
  {path:'addingredient',component:AddIngredientComponent},
  {path:'editingredient/:id',component:EditIngredientComponent},
  {path:'listingredient',component:ListIngredientComponent},

  {path:'gallerie',component:ListGallerieComponent},

  {path:'recetteingredient',component:ListRecetteingredientComponent},
  {path:'recetteingredient/:id',component:ListRecetteingredientComponent},
  {path:'addrecetteingredient',component:AddRecetteingredientComponent},
  {path:'editrecetteingredient/:id',component:EditRecetteingredientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],  // permet d afficher la page suivante en remettant l ascenceur de la page en haut

  exports: [RouterModule]
})
export class AppRoutingModule { }
