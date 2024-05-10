import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Educacion Infantil', modalidad: 'Online', titulacion: 'Grado Medio' },
      { id: 13, name: 'DAM' , modalidad: 'Dual', titulacion: 'Grado Superior'},
      { id: 14, name: 'Comercio' , modalidad: 'Presencial', titulacion: 'Grado Superior'},
      { id: 15, name: 'Dentista' , modalidad: 'Presencial', titulacion: 'Grado Superior'},
      { id: 16, name: 'Dietética', modalidad: 'Dual', titulacion: 'Grado Superior'},
      { id: 17, name: 'Cuidado y Auxilios de Enfermeria' , modalidad: 'Dual', titulacion: 'Grado Medio'},
      { id: 18, name: 'Administracion y Finanzas' , modalidad: 'Online', titulacion: 'Grado Medio'},
      { id: 19, name: 'DAW' , modalidad: 'Presencial', titulacion: 'Grado Medio'},
      { id: 20, name: 'Marketing' , modalidad: 'Online', titulacion: 'Grado Superior'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
