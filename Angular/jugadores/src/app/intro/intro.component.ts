import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JugadorLocationComponent } from '../jugador-location/jugador-location.component';
import { Jugadorlocation } from '../jugadorlocation';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [
    CommonModule,
    JugadorLocationComponent
  ],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-jugador-location></app-jugador-location>
  </section>
  `,
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  jugadorLocation: Jugadorlocation = {
    id: 9999,
    name: 'Messi Test',
    city: 'Test Messi',
    state: 'AR',
    photo: `${this.baseUrl}/example-house.jpg`,

  };
}
