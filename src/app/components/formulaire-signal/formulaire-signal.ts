import { Component, signal } from '@angular/core';
import { Personne2 } from '../../models/personne';
import { form, Field } from '@angular/forms/signals';

@Component({
  selector: 'app-formulaire-signal',
  imports: [Field],
  templateUrl: './formulaire-signal.html',
  styleUrl: './formulaire-signal.css',
})
export class FormulaireSignalComponent {
  //objet contenant les données du formulaire
  personneModel = signal<Personne2>({
    nom: '',
    prenom: '',
    age: 0,
  });
  //assurer le binding
  personneForm = form(this.personneModel);
  afficher(event: SubmitEvent) {
    //or without event, but with ngSubmit from FormsModule
    event.preventDefault();
    console.log(this.personneModel());
    this.personneModel.set({ nom: '', prenom: '', age: 0 });
  }
}
