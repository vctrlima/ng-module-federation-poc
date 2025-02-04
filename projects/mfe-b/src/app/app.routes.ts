import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'child-a',
        loadComponent: () =>
          import('./components/child-a/child-a.component').then(
            (c) => c.ChildAComponent
          ),
      },
      {
        path: 'child-b',
        loadComponent: () =>
          import('./components/child-b/child-b.component').then(
            (c) => c.ChildBComponent
          ),
      },
    ],
  },
];
