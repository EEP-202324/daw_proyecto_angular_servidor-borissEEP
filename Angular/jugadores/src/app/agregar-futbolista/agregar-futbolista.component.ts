import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-agregar-futbolista',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <p>
      agregar-futbolista works!
    </p>
  `,
  styleUrl: './agregar-futbolista.component.css'
})
export class AgregarFutbolistaComponent {

  FormFutbolista = new FormGroup({
    nombre: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    pais: new FormControl('', Validators.required),
    photo: new FormControl(''),
  });
}
