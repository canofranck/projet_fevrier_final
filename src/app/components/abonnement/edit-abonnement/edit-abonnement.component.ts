import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Abonnement } from 'src/app/models/abonnement/abonnement';
import { AbonnementService } from 'src/app/services/abonnement/abonnement.service';

@Component({
selector: 'app-edit-abonnement',
templateUrl: './edit-abonnement.component.html',
styleUrls: ['./edit-abonnement.component.css']
})
export class EditAbonnementComponent implements OnInit {

declare editabonnementForm: FormGroup;
abonnement: Abonnement = new Abonnement();
utilisateur : any={};
constructor(
private abonnementService : AbonnementService,
private router : Router,
private route: ActivatedRoute,
private formBuilder: FormBuilder,


) {
 }
ngOnInit(): void {
const id = Number(this.route.snapshot.paramMap.get('id'));
this.editabonnementForm = this.formBuilder.group({
  id_abonnement: ['',Validators.required],

  abonnementpris: ['',Validators.required],
  abonnementdatedebut: ['',Validators.required],
  abonnementduree :['',Validators.required],
  id_utilisateur: ['',Validators.required],

})
//récupere le produit via l'id
this.abonnementService.editUser(id).subscribe(
  (data :any) => {
    console.log(data)
    //complete le form avec le produit récupéré
    this.editabonnementForm.patchValue({
        id_abonnement: data.id_abonnement,
        id_utilisateur: data.utilisateur.id_utilisateur,
        abonnementpris: data.abonnementpris,
        abonnementdatedebut: data.abonnementdatedebut,
        abonnementduree: data.abonnementduree,
    });
    this.utilisateur=data.utilisateur;
  }
)
}
update() {
  if (this.editabonnementForm.valid) {
    let data = this.editabonnementForm.value;
    data.utilisateur= this.utilisateur;
    console.log(this.editabonnementForm.value);

    this.abonnementService.updateUser(data).subscribe(
      () => {
        // this.router.navigate(['/abonnement'])

      }
    )
  }
}
}
