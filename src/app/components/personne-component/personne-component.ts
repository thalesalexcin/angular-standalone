import { Component, inject, Inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PersonneModel } from '../../models/personne';
import { PersonneService } from '../../services/personne-service';
import { FormsModule } from '@angular/forms';
import { find } from 'rxjs';

@Component({
  selector: 'app-personne-component',
  imports: [FormsModule],
  templateUrl: './personne-component.html',
  styleUrl: './personne-component.css',
})
export class PersonneComponent implements OnInit, OnDestroy {
  personnes = signal<PersonneModel[]>([]);
  personne: PersonneModel = {
    age: 0,
    nom: '',
    prenom: '',
  };
  ps = inject(PersonneService);

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.ps.findAll().subscribe((res) => this.personnes.set(res));
  }

  ajouter() {
    this.ps.save(this.personne).subscribe({
      next: (res) => {
        this.personnes.set([...this.personnes(), res]);
        this.personne = { age: 0, id: 0, nom: '', prenom: '' };
      },
    });
  }

  ngOnDestroy(): void {}

  supprimer(id: number) {
    this.ps.delete(id).subscribe((res) => {
      this.personnes.set(this.personnes().filter((p) => p.id != id));
    });
  }
}
