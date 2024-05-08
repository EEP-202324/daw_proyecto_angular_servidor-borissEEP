import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { PlayerLocation } from '../playerlocation';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class="listing-photo" [src]="playerLocation?.photo"
        alt="Exterior photo of {{playerLocation?.name}}"/>
      <section class="listing-description">
        <h2 class="listing-heading">{{playerLocation?.name}}</h2>
        <p class="listing-location">{{playerLocation?.city}}, {{playerLocation?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        
      </section>
    </article>
  `,
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  playerService = inject(PlayerService);
  playerLocation: PlayerLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.playerLocation = this.playerService.getPlayerLocationById(housingLocationId);
  }

}
