import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';
import { jwtDecode } from 'jwt-decode';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  private subject = new Subject<boolean>();

  get url(): string {
    return environment.BACKEND_URL + '/authenticate';
  }

  authenticate(user: User): Observable<Token> {
    return this.http.post<Token>(this.url, user);
  }

  isExpired(token: string) {
    const decoded = jwtDecode(token);
    let expirationDate = new Date(decoded.exp! * 1000);
    let now = new Date();
    return now > expirationDate;
  }

  refreshToken(token: string): Observable<Token> {
    return this.http.post<Token>(this.url, { grantType: 'REFRESH_TOKEN', refreshToken: token });
  }

  isConnected(): boolean {
    const token = localStorage.getItem('tokens');
    return token != null;
  }

  logout() {
    localStorage.removeItem('tokens');
  }
}
