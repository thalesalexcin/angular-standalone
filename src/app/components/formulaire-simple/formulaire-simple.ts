import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-formulaire-simple',
  imports: [],
  templateUrl: './formulaire-simple.html',
  styleUrl: './formulaire-simple.css',
})
export class FormulaireSimpleComponent {
  nom = 'Doe';
  nomSignal = signal('');
  onInputChanged(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      let value = (e.target as HTMLInputElement).value;
      this.nomSignal.set(value);
    }
  }

  updateNom(value: string) {
    this.nom = value;
  }
}
