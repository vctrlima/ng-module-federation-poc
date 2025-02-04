import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component').then((c) => c.AppComponent),
    pathMatch: 'full',
  },
];
