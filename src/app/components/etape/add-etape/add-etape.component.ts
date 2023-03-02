import { Etape } from './../../../models/etape/etape';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtapeService } from 'src/app/services/etape/etape.service';
import { RecetteService } from 'src/app/services/recette/recette.service';

@Component({
  selector: 'app-add-etape',
  templateUrl: './add-etape.component.html',
  styleUrls: ['./add-etape.component.css']
})
export class AddEtapeComponent implements OnInit{
  declare formaddEtape: FormGroup;
  declare recettes : any ;
  @Input() idrecetteencours! : number;
  @Input()  afficheretape!: boolean;
  @Output()
   public   cacheretape:EventEmitter<any> =new EventEmitter<any>();
  constructor (
    private etapeService: EtapeService,
    private recetteService : RecetteService,
    private formBuilder: FormBuilder,
    private router : Router,

  ){}
    ngOnInit(): void {
        this.formaddEtape = this.formBuilder.group({
          id_etape:['',Validators.required],
          numero_etape:['',Validators.required],
          instructions_etape:['',Validators.required],
          image_etape:['',Validators.required],
          id_recette:['',Validators.required],

        })
        this.recetteService.findAllRecettes().subscribe(
          data =>{
          // console.log(data);
              this.recettes = Object.values(data);
             this.recettes.sort((a: { date_recette: number; }, b: { date_recette: number; }) => (a.date_recette < b.date_recette ? 1 : -1))
              // console.log(this.recettes);
             this.idrecetteencours=this.recettes[0].id_recette;
            //  console.log(" id recette avant le set"+this.idrecetteencours);
              this.recetteService.setIdRecetteEncours( this.idrecetteencours);
              // console.log(" id recette en cours dans affiche ingredient"+this.idrecetteencours);
            }
        )
  }
  create(){

    const formValues = this.formaddEtape.value;
    const etape = new Etape();

      etape.numero_etape = this.formaddEtape.value.numero_etape;
     etape.instructions_etape =  this.formaddEtape.value.instructions_etape;
      etape.image_etape = this.formaddEtape.value.image_etape;
      etape.id_recette=this.idrecetteencours;
      // this.nouveau_tableau.push(ingredient);
      // console.table(this.nouveau_tableau);
       console.log(" id recette avant submit"+this.idrecetteencours)
      this.etapeService.saveEtape(etape).subscribe((response) => {
        console.log(response);
          this.formaddEtape.reset();
          // this.nouveau_tableau.push(response as Ingredients);
        //

       });

     // mehtode create avec manytoone depuis etape
    // this.recetteService.editRecette(this.formaddEtape.value.id_recette).subscribe(
    //   (recette) => {
    //     if(recette) {
    //       this.formaddEtape.value.recette = recette;
    //       this.etapeService.saveEtape(this.formaddEtape.value).subscribe(
    //         () => {
    //           this.router.navigate(['/etape'])
    //         },
    //         (error) => {
    //           console.error(error);
    //           // Afficher un message d'erreur à l'utilisateur
    //         }
    //       )
    //     } else {
    //       console.error("L'édition de l abonnement a échoué");
    //       // Afficher un message d'erreur à l'utilisateur
    //     }
    //   },
    //   (error) => {
    //     console.error(error);
    //     // Afficher un message d'erreur à l'utilisateur
    //   }
    // );
  }
  cachertape(){

    this.cacheretape.emit({});
  }
  }
