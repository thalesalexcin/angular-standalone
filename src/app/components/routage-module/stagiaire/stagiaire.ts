import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stagiaire',
  imports: [],
  templateUrl: './stagiaire.html',
  styleUrl: './stagiaire.css',
})
export class StagiaireComponent {
  @Input() nom = '';
  @Input() prenom = '';
}
