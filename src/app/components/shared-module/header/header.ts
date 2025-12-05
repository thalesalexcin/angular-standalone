import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  title = 'angular-standalone';
  authService = inject(AuthService);
  router = inject(Router);

  get isConnected(): boolean {
    return this.authService.isConnected();
  }

  login() {
    this.router.navigate(['/auth']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
