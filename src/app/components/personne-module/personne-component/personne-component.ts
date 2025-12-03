import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PersonneFormComponent } from '../personne-form/personne-form';
import { PersonneModel } from '../../../models/personne';
import { PersonneService } from '../../../services/personne-service';

@Component({
  selector: 'app-personne-component',
  imports: [FormsModule, RouterLink, PersonneFormComponent],
  templateUrl: './personne-component.html',
  styleUrl: './personne-component.css',
})
export class PersonneComponent implements OnInit {
  personnes = signal<PersonneModel[]>([]);
  ps = inject(PersonneService);
  error = signal<string | null>(null);
  personneView = viewChild.required(PersonneFormComponent);

  ngOnInit(): void {
    this.ps.findAll().subscribe({
      next: (res) => {
        this.personnes.set(res);
        this.error.set(null);
      },
      error: (err) => {
        this.error.set('Problème de recupération de données');
        console.error(err);
      },
    });
  }

  supprimer(id: number) {
    this.ps.remove(id).subscribe((res) => {
      this.personnes.set(this.personnes().filter((p) => p.id != id));
    });
  }

  ajouter(personne: PersonneModel) {
    this.ps.save(personne).subscribe({
      next: (res) => {
        this.personnes.set([...this.personnes(), res]);
        this.personneView().personne = { age: 0, nom: '', prenom: '' };
        this.error.set(null);
      },
      error: (err) => {
        this.error.set('Insertion impossible');
        console.error(err);
      },
    });
  }
}
