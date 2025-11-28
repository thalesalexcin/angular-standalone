import { Component } from '@angular/core';
import Stagiaire from '../../classes/stagiaire';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  isDisabled = true;
  title = 'angular-standalone';
  stagiaire = new Stagiaire(100, 'Wick', 'John');
  stagiaire2 = new Stagiaire(100, 'Dalton');
  stagiaires: Array<Stagiaire> = [
    new Stagiaire(100, 'Wick', 'John'),
    new Stagiaire(101, 'Abruzzi', 'John'),
    new Stagiaire(102, 'Marley', 'Bob'),
    new Stagiaire(103, 'Segal', 'Steven'),
  ];
  numbers = [2, 3, 8, 5, 1];
  moyennes = [18, 5, 11, 15];
  couleur = 'white';
  bgCouleur = 'tomato';
  style = {
    color: 'white',
    backgroundColor: 'dodgerblue',
  };
  firstname = 'Kostas';
  lastname = 'Mitroglou';
  ville = 'Toulouse';
  codePostal = '31000';

  afficherBonjour() {
    return 'Bonjour';
  }

  alertBonjour() {
    alert('Bonjour');
  }

  toggleButton() {
    this.isDisabled = !this.isDisabled;
  }

  afficherText(event: Event) {
    console.log((event as InputEvent).data);

    console.log((event.target as HTMLInputElement).value);
  }
}
