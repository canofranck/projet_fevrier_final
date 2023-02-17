import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentaireService } from 'src/app/services/commentaire/commentaire.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent  implements OnInit {
  declare commentaire: any[];

  constructor(
    private commentaireService: CommentaireService,
    private router: Router,
    private route: ActivatedRoute
    )
     {}

  ngOnInit(): void {
    this.getCommentaires();
  }

  getCommentaires() {
    return this.commentaireService.findAllCommentaire().subscribe(
      data => {
        console.log(data);
        this.commentaire = data as any[];
      }
    )
  }

  deleteCommentaire(id: number) {

    this.commentaireService.deleteCommentaire(id).subscribe
      (
        () => {

        }
      )


  }
}

