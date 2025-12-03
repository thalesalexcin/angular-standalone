import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import { PersonneModel } from '../../models/personne';
import { PersonneService } from '../../services/personne-service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PersonneFormComponent } from '../personne-form/personne-form';

@Component({
  selector: 'app-personne-component',
  imports: [FormsModule, RouterLink, PersonneFormComponent],
  templateUrl: './personne-component.html',
  styleUrl: './personne-component.css',
})
export class PersonneComponent implements OnInit {
  personnes = signal<PersonneModel[]>([]);
  ps = inject(PersonneService);
  personneView = viewChild.required(PersonneFormComponent);

  ngOnInit(): void {
    this.ps.findAll().subscribe((res) => this.personnes.set(res));
  }

  supprimer(id: number) {
    this.ps.delete(id).subscribe((res) => {
      this.personnes.set(this.personnes().filter((p) => p.id != id));
    });
  }

  onSubmit(personne: PersonneModel) {
    this.ps.save(personne).subscribe({
      next: (res) => {
        this.personnes.set([...this.personnes(), res]);
        this.personneView().personne = { age: 0, id: 0, nom: '', prenom: '' };
      },
    });
  }
}
