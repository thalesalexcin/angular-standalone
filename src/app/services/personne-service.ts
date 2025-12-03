import { Injectable } from '@angular/core';
import { PersonneModel } from '../models/personne';
import { GenericService } from './generic';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonneService extends GenericService<PersonneModel> {
  constructor(http: HttpClient) {
    super(http, '/personnes');
  }
}
