import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Formacion } from '../formacion';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-formacion',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './formacion.component.html',
  styleUrl: './formacion.component.css'
})
export class FormacionComponent {
  @Input() formacion!: Formacion;
}
