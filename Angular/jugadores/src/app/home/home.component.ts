import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerLocationComponent } from '../player-location/player-location.component';
import { PlayerLocation } from '../playerlocation';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PlayerLocationComponent
  ],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by player">
      <button class="primary" type="button">Buscar</button>
    </form>
  </section>
  <section class="results">
    <app-player-location
  *ngFor="let playerLocation of playerLocationList"
  [playerLocation]="playerLocation">
    </app-player-location>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  playerLocationList: PlayerLocation[] = [];
  playerService: PlayerService = inject(PlayerService);

  constructor() {
    this.playerLocationList = this.playerService.getAllPlayerLocations();
  }
}
