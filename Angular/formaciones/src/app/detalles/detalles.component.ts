import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormacionService } from '../formacion.service';
import { Formacion } from '../formacion';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  formacionService = inject(FormacionService);
  formacion: Formacion | undefined;

  constructor() {
    const formacionId = Number(this.route.snapshot.params['id']);
    this.formacion = this.formacionService.getFormacionById(formacionId);
  }

}
