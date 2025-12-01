import { Component, inject, Inject, OnInit } from '@angular/core';
import { PersonneModel } from '../../models/personne';
import { PersonneService } from '../../services/personne-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personne-component',
  imports: [FormsModule],
  templateUrl: './personne-component.html',
  styleUrl: './personne-component.css',
})
export class PersonneComponent implements OnInit {
  personnes: PersonneModel[] = [];
  personne: PersonneModel = {
    age: 0,
    id: 0,
    nom: '',
    prenom: '',
  };
  ps = inject(PersonneService);

  ngOnInit(): void {
    this.personnes = this.ps.findAll();
  }

  ajouter() {
    this.ps.save(this.personne);
    this.personne = { age: 0, id: 0, nom: '', prenom: '' };
  }

  supprimer(id: number) {
    this.ps.delete(id);
  }
}
