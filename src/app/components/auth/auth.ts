import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Field, form } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-auth',
  imports: [Field, FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class AuthComponent {
  user = signal<User>({
    username: '',
    password: '',
    grantType: 'PASSWORD',
  });

  error = signal<string | null>(null);
  loginForm = form(this.user);
  router = inject(Router);
  authService = inject(AuthService);
  onSubmit() {
    this.authService.authenticate(this.user()).subscribe({
      next: (res) => {
        localStorage.setItem('tokens', JSON.stringify(res));
        this.router.navigate(['/personne']);
      },
      error: (err) => {
        console.error(err);
        this.error.set('Invalid credentials');
      },
    });
  }
}
