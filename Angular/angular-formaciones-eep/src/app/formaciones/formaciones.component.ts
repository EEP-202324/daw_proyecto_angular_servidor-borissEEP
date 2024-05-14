import { Component, OnInit } from '@angular/core';

import { Formacion } from '../formacion';
import { FormacionService } from '../formacion.service';

@Component({
  selector: 'app-formaciones',
  templateUrl: './formaciones.component.html',
  styleUrls: ['./formaciones.component.css']
})
export class FormacionesComponent implements OnInit {
  formaciones: Formacion[] = [];

  constructor(private formacionService: FormacionService) { }

  ngOnInit(): void {
    this.getFormaciones();
  }

  getFormaciones(): void {
    this.formacionService.getFormaciones()
    .subscribe(formaciones => this.formaciones = formaciones);
  }

  add(name: string, modalidad: string, titulacion: string): void {
  name = name.trim();
  modalidad = modalidad.trim();
  titulacion = titulacion.trim();
  if (!name || !modalidad || !titulacion) { return; }
  this.formacionService.addFormacion({ name, modalidad, titulacion } as Formacion)
    .subscribe(formacion => {
      this.formaciones.push(formacion);
    });
}

  delete(formacion: Formacion): void {
    this.formaciones = this.formaciones.filter(f => f !== formacion);
    this.formacionService.deleteFormacion(formacion.id).subscribe();
  }

}
