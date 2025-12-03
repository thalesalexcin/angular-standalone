import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Personne } from '../../../models/personne';
import { checkNomValidator } from '../../../validators/string.validator';

@Component({
  selector: 'app-formulaire-reactif',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulaire-reactif.html',
  styleUrl: './formulaire-reactif.css',
})
export class FormulaireReactifComponent implements OnInit {
  personnes: Personne[] = [];
  personneForm = new FormGroup({
    nom: new FormControl('', [Validators.required, checkNomValidator]),
    prenom: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z]{1}[a-z ]{2,29}$/),
    ]),
    age: new FormControl('', [Validators.required, Validators.max(120)]),
  });
  //nom = new FormControl('Doe');
  ngOnInit(): void {
    // this.personneForm.setValue({
    //   nom: 'John',
    //   prenom: 'Doe',
    //   age: 34,
    // });
    // this.personneForm.patchValue({
    //   nom: 'John',
    //   prenom: 'Doe',
    // });
  }

  afficher() {
    console.log(this.personneForm);
    console.log(this.personneForm.value);
    console.log(this.personneForm.controls.nom);
    console.log(this.personneForm.get('nom'));

    this.personnes.push(this.personneForm.value as Personne);
    this.personneForm.reset();
  }

  get nom() {
    return this.personneForm.controls.nom;
  }

  get prenom() {
    return this.personneForm.controls.prenom;
  }

  get age() {
    return this.personneForm.controls.age;
  }
}
