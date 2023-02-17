import { Utilisateur } from "../utilisateur/utilsateur";

export class Abonnement {
  public id_abonnement:number;
	public abonnementpris: boolean;
  public abonnementdatedebut:Date;
	public abonnementduree:number;
  public id_utilisateur:number;
  public utilisateur?: Utilisateur | null =null

  constructor (){
  this.id_abonnement=0;
  this.abonnementpris=false;
  this.abonnementdatedebut=new Date;
  this.abonnementduree=0;
  this.id_utilisateur=0;
  this.utilisateur=null;

  }
}


