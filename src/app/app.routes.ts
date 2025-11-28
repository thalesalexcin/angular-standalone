import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { ObservableComponent } from './components/observable/observable';
import { ComputedComponent } from './components/computed/computed';
import { SubjectComponent } from './components/subject/subject';
import { AdresseComponent } from './components/adresse/adresse';
import { StagiaireComponent } from './components/stagiaire/stagiaire';
import { CalculComponent } from './components/calcul/calcul';
import { TableauComponent } from './components/tableau/tableau';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'adresse', component: AdresseComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
  { path: 'calcul/:op', component: CalculComponent },
  { path: 'tableau/:indice', component: TableauComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'computed', component: ComputedComponent },
];
