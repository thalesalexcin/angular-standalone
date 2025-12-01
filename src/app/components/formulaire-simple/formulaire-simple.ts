import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Personne } from '../../models/personne';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulaire-simple',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulaire-simple.html',
  styleUrl: './formulaire-simple.css',
})
export class FormulaireSimpleComponent {
  personne: Personne = {};
  personnesAjoutes: Personne[] = [];

  afficher(form: NgForm) {
    this.personnesAjoutes.push(form.value);
    form.reset();
  }
}

/*
Dans une balise form, ajouter trois champs
nom,
prenom
age
et un bouton de soumission
en cliquant sur le bouron on affiche 
les données du formulaire dans la console
sous forme d'objet 

*/
