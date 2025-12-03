import { Injectable, signal } from '@angular/core';
import { PersonneModel } from '../models/personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.BACKEND_URL + '/personnes';
  }

  findAll(): Observable<PersonneModel[]> {
    return this.http.get<PersonneModel[]>(this.url);
  }

  findById(id: number): Observable<PersonneModel> {
    return this.http.get<PersonneModel>(this.url + '/' + id);
  }

  save(p: PersonneModel): Observable<PersonneModel> {
    return this.http.post<PersonneModel>(this.url, p);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id);
  }

  update(id: number | undefined, p: PersonneModel): Observable<PersonneModel> {
    return this.http.put<PersonneModel>(this.url + '/' + id, p);
  }
}
