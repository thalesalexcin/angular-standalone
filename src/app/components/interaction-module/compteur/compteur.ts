import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  imports: [],
  templateUrl: './compteur.html',
  styleUrl: './compteur.css',
})
export class CompteurComponent {
  value: number = 0;
  increment() {
    this.value++;
  }
  decrement() {
    this.value--;
  }
}
