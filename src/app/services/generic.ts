import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { User } from '../models/user';

export abstract class GenericService<Model> {
  private headers: HttpHeaders;
  constructor(
    protected http: HttpClient,
    protected path: string,
  ) {
    const user: User = JSON.parse(localStorage.getItem('user') ?? '');
    const authorization = btoa(`${user.username}:${user.password}`);
    this.headers = new HttpHeaders().set('Authorization', `Basic ${authorization}`);
  }

  findAll(): Observable<Model[]> {
    return this.http.get<Model[]>(this.url, { headers: this.headers });
  }

  findById(id: number): Observable<Model> {
    return this.http.get<Model>(this.url + '/' + id, { headers: this.headers });
  }

  save(p: Model): Observable<Model> {
    return this.http.post<Model>(this.url, p, { headers: this.headers });
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id, { headers: this.headers });
  }

  update(id: number, p: Model): Observable<Model> {
    return this.http.put<Model>(this.url + '/' + id, p, { headers: this.headers });
  }

  get url(): string {
    return environment.BACKEND_URL + this.path;
  }
}
