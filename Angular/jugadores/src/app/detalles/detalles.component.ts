import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { PlayerLocation } from '../playerlocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
  <article>
    <img class="listing-photo" [src]="playerLocation?.photo"
      alt="Exterior photo of {{playerLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{playerLocation?.name}}</h2><br>
      <p class="listing-location">{{playerLocation?.city}}, {{playerLocation?.country}}</p><br>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">Acerca de este futbolista:</h2><br>
      <ul>
        <li>Edad: {{playerLocation?.descrip}}</li><br><br>
        <li>Equipo Actual: {{playerLocation?.equipo}}</li>
      </ul>
    </section><br>
  </article>
`,
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  playerService = inject(PlayerService);
  playerLocation: PlayerLocation | undefined;

  constructor() {
  const playerLocationId = parseInt(this.route.snapshot.params['id'], 10);
  this.playerService.getPlayerLocationById(playerLocationId).then(playerLocation => {
    this.playerLocation = playerLocation;
  });
}

  applyForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email: new FormControl('')
  });

  submitApplication() {
  this.playerService.submitApplication(
    this.applyForm.value.firstName ?? '',
    this.applyForm.value.lastName ?? '',
    this.applyForm.value.email ?? ''
  );
}
}
