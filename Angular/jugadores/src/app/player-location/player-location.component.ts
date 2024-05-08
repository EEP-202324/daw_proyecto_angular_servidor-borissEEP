import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerLocation } from '../playerlocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-player-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="playerLocation.photo" alt="Exterior photo of {{playerLocation.name}}">
    <h2 class="listing-heading">{{ playerLocation.name }}</h2>
    <p class="listing-location">{{ playerLocation.city}}, {{playerLocation.country }}</p>
   <a class="enlace" [routerLink]="['/details', playerLocation.id]">Saber Más</a>
  </section>
`,
  styleUrl: './player-location.component.css'
})
export class PlayerLocationComponent {
  @Input() playerLocation!: PlayerLocation;
}
