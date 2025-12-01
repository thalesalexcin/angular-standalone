import { Injectable } from '@angular/core';
import { PersonneModel } from '../models/personne';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  private personnes: PersonneModel[];

  private nextId: number = 0;
  constructor() {
    this.personnes = [
      { id: this.nextId++, nom: 'Wick', prenom: 'John', age: 45 },
      { id: this.nextId++, nom: 'Dalton', prenom: 'Jack', age: 55 },
      { id: this.nextId++, nom: 'Maggio', prenom: 'Candice', age: 27 },
      { id: this.nextId++, nom: 'Linus', prenom: 'Sophie', age: 67 },
    ];
  }

  findAll() {
    return this.personnes;
  }

  save(p: PersonneModel) {
    p.id = this.nextId++;
    this.personnes.push(p);
  }

  delete(id: number) {
    let index = this.personnes.findIndex((p) => p.id == id);
    this.personnes.splice(index, 1);
  }
}
