import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetallesComponent } from './detalles/detalles.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Formacion page'
  },
  {
    path: 'details/:id',
    component: DetallesComponent,
    title: 'Formacion details'
  }
];

export default routeConfig;
