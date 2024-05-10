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
        <input type="text" placeholder="Filter by player" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Buscar</button><br><br>
        <button class="primary" type="button">Añadir Futbolista</button>

        <button class="primary" type="button">Borrar Futbolista</button>
      </form>
    </section>
    <section class="results">
      <app-player-location
        *ngFor="let playerLocation of filteredLocationList"
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
  this.playerService.getAllPlayerLocations().then((playerLocationList: PlayerLocation[]) => {
    this.playerLocationList = playerLocationList;
    this.filteredLocationList = playerLocationList;
  });
}
  filteredLocationList: PlayerLocation[] = [];
  filterResults(text: string) {
  if (!text) {
    this.filteredLocationList = this.playerLocationList;
    return;
  }

  this.filteredLocationList = this.playerLocationList.filter(
    playerLocation => playerLocation?.name.toLowerCase().includes(text.toLowerCase())
  );
}
}
