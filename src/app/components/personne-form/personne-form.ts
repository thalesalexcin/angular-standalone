import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Field, form } from '@angular/forms/signals';
import { PersonneModel } from '../../models/personne';

@Component({
  selector: 'app-personne-form',
  imports: [Field, FormsModule],
  templateUrl: './personne-form.html',
  styleUrl: './personne-form.css',
})
export class PersonneFormComponent {
  private _personne = signal<PersonneModel>({ age: 0, nom: '', prenom: '' });

  buttonLabel = input.required<string>();
  personneForm = form(this._personne);
  outputSubmit = output<PersonneModel>();

  onSubmit() {
    this.outputSubmit.emit(this.personne);
  }

  set personne(value: PersonneModel) {
    this._personne.set(value);
  }

  get personne(): PersonneModel {
    return this._personne();
  }
}
