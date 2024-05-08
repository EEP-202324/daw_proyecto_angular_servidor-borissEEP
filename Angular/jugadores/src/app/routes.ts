import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetallesComponent } from './detalles/detalles.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Players'
  },
  {
    path: 'details/:id',
    component: DetallesComponent,
    title: 'Player Details'
  }
];

export default routeConfig;
