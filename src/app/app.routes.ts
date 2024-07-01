import { Routes } from '@angular/router';

import { HomeComponent } from './home';
import { DetailsComponent } from './details'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
];
