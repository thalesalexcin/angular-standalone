import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/shared-module/menu/menu';
import { HeaderComponent } from './components/shared-module/header/header';

@Component({
  selector: 'app-root', // la balise à utiliser pour ce composant
  imports: [RouterOutlet, MenuComponent, HeaderComponent], // CommonModule = pipes et directives de base
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {}
