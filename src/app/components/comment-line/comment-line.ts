import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment-line',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './comment-line.html',
  styleUrl: './comment-line.css',
})
export class CommentLineComponent {
  commentLineForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.commentLineForm = this.fb.group({
      titre: this.fb.control(''),
      contenu: this.fb.control(''),
      category: this.fb.control(''),
    });
  }
}
