import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Formacion } from './formacion';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const formaciones = [
      { id: 1, name: 'Comercio Internacional', modalidad: 'Online', titulacion: 'Grado Medio' },
      { id: 2, name: 'DAW' , modalidad: 'Dual', titulacion: 'Grado Superior'},
      { id: 3, name: 'DAM' , modalidad: 'Presencial', titulacion: 'Grado Superior'},
      { id: 4, name: 'Higiene Bucodental' , modalidad: 'Presencial', titulacion: 'Grado Superior'},
      { id: 5, name: 'Dietética', modalidad: 'Dual', titulacion: 'Grado Superior'},
      { id: 6, name: 'Cuidado y Auxilios de Enfermeria' , modalidad: 'Dual', titulacion: 'Grado Medio'},
      { id: 7, name: 'Administracion y Finanzas' , modalidad: 'Online', titulacion: 'Grado Medio'},
      { id: 8, name: 'Botanica' , modalidad: 'Presencial', titulacion: 'Grado Medio'},
      { id: 9, name: 'Marketing' , modalidad: 'Online', titulacion: 'Grado Superior'}
    ];
    return {formaciones};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(formaciones: Formacion[]): number {
    return formaciones.length > 0 ? Math.max(...formaciones.map(formacion => formacion.id)) + 1 : 11;
  }
}
