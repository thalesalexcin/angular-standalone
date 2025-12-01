import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Personne } from '../../models/personne';

@Component({
  selector: 'app-comment',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './comment.html',
  styleUrl: './comment.css',
})
export class CommentComponent {
  commentForm: FormGroup;
  personComments: PersonComment[] = [];

  constructor(private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      nom: this.fb.control(''),
      prenom: this.fb.control(''),
      commentsControls: this.fb.array([]),
    });
  }

  get comments() {
    return this.commentForm.controls['commentsControls'] as FormArray;
  }

  get nom() {
    return this.commentForm.controls['nom'];
  }

  get prenom() {
    return this.commentForm.controls['prenom'];
  }

  ajouterCommentaire() {
    this.comments.push(
      this.fb.group({
        titre: this.fb.control(''),
        contenu: this.fb.control(''),
        categorie: this.fb.control(''),
      }),
    );
  }
  afficher() {
    let personNom = this.nom.value;
    let personPrenom = this.prenom.value;

    let commentsValues: Comment[] = [];
    this.comments.controls.forEach((element) => {
      let group = element as FormGroup;

      commentsValues.push({
        title: group.controls['titre'].value,
        category: group.controls['categorie'].value,
        content: group.controls['contenu'].value,
      });
    });

    this.personComments.push({
      person: {
        nom: personNom,
        prenom: personPrenom,
      },
      comments: commentsValues,
    });

    this.comments.clear();
    this.commentForm.reset();
  }
}

export interface PersonComment {
  person: Personne;
  comments: Comment[];
}

export interface Comment {
  title: string;
  content: string;
  category: string;
}
