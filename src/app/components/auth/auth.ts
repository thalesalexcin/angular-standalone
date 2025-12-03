import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Field, form } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-auth',
  imports: [Field, FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class AuthComponent {
  login = signal<LoginRequest>({
    username: '',
    password: '',
  });

  users: User[] = [
    { username: 'user', password: 'user' },
    { username: 'admin', password: 'admin' },
    { username: 'sadmin', password: 'sadmin' },
  ];
  error = signal<string | null>(null);
  loginForm = form(this.login);
  router = inject(Router);
  onSubmit() {
    let validUser = this.users.some(
      (u) => u.username == this.login().username && u.password == this.login().password,
    );
    if (validUser) {
      localStorage.setItem('user', JSON.stringify(this.login()));
      this.router.navigate(['/personne']);
    } else {
      this.error.set('Invalid credentials');
    }
  }
}

export interface LoginRequest {
  username: string;
  password: string;
}
