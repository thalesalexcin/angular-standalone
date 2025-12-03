import { Component, inject, input, OnInit, signal } from '@angular/core';
import { PersonneService } from '../../services/personne-service';
import { PersonneModel } from '../../models/personne';
import { Field, form } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personne-details',
  imports: [Field, FormsModule],
  templateUrl: './personne-details.html',
  styleUrl: './personne-details.css',
})
export class PersonneDetailsComponent implements OnInit {
  id = input.required<number>();
  ps = inject(PersonneService);
  router = inject(Router);
  personne = signal<PersonneModel>({ age: 0, nom: '', prenom: '' });
  personneForm = form(this.personne);

  ngOnInit(): void {
    this.ps.findById(this.id()).subscribe((res) => this.personne.set(res));
  }
  onSubmit() {
    let updatedPersonne = this.personneForm().value();
    this.ps
      .update(this.id(), updatedPersonne)
      .subscribe((res) => this.router.navigate(['/personne']));
  }
}
