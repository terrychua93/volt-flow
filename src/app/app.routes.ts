import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home }, // Home page route
  { path: '**', redirectTo: '' },         // fallback route
];
