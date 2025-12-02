import { Component } from '@angular/core';
import { VilleComponent } from '../ville/ville';

@Component({
  selector: 'app-pays',
  imports: [VilleComponent],
  templateUrl: './pays.html',
  styleUrl: './pays.css',
})
export class PaysComponent {
  villes = ['Marseille', 'Lyon', 'Paris'];
  onVilleValueChanged(newValue: string, index: number) {
    this.villes[index] = newValue;
  }
}
