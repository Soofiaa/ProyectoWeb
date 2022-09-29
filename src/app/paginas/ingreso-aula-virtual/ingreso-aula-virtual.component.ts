import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-ingreso-aula-virtual',
  templateUrl: './ingreso-aula-virtual.component.html',
  styleUrls: ['./ingreso-aula-virtual.component.scss']
})

export class IngresoAulaVirtualComponent{

  resultado!: string;
  rut!: number;

  formularioLogIn = new FormGroup({
    rut: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  submit() {
    if (this.formularioLogIn.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }

}