import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormacionComponent } from '../formacion/formacion.component';
import { Formacion } from '../formacion';
import { FormacionService } from '../formacion.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormacionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  formacionList: Formacion[] = [];
  formacionService: FormacionService = inject(FormacionService);

  constructor() {
    this.formacionList = this.formacionService.getAllFormacion();
  }
}
