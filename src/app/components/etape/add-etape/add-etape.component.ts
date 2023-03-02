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
  @Input()
  afficheretape!: boolean;
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
  }
  create(){
     // mehtode create avec manytoone depuis etape
    this.recetteService.editRecette(this.formaddEtape.value.id_recette).subscribe(
      (recette) => {
        if(recette) {
          this.formaddEtape.value.recette = recette;
          this.etapeService.saveEtape(this.formaddEtape.value).subscribe(
            () => {
              this.router.navigate(['/etape'])
            },
            (error) => {
              console.error(error);
              // Afficher un message d'erreur à l'utilisateur
            }
          )
        } else {
          console.error("L'édition de l abonnement a échoué");
          // Afficher un message d'erreur à l'utilisateur
        }
      },
      (error) => {
        console.error(error);
        // Afficher un message d'erreur à l'utilisateur
      }
    );
  }
  cachertape(){

    this.cacheretape.emit({});
  }
  }
