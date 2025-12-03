import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

export abstract class GenericService<Model> {
  constructor(
    protected http: HttpClient,
    protected path: string,
  ) {}

  findAll(): Observable<Model[]> {
    return this.http.get<Model[]>(this.url);
  }

  findById(id: number): Observable<Model> {
    return this.http.get<Model>(this.url + '/' + id);
  }

  save(p: Model): Observable<Model> {
    return this.http.post<Model>(this.url, p);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id);
  }

  update(id: number, p: Model): Observable<Model> {
    return this.http.put<Model>(this.url + '/' + id, p);
  }

  get url(): string {
    return environment.BACKEND_URL + this.path;
  }
}
