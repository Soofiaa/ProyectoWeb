import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-ingreso-aula-virtual-profesor',
  templateUrl: './ingreso-aula-virtual-profesor.component.html',
  styleUrls: ['./ingreso-aula-virtual-profesor.component.scss']
})
export class IngresoAulaVirtualProfesorComponent implements OnInit{

  resultado!: string;
  rut!: number;
  formularioLogIn: FormGroup = {} as FormGroup;

  submit() {
    if (this.formularioLogIn.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }

  iniciarSesion(){
    console.log(this.formularioLogIn.status);
  }

  ngOnInit():void{
      this.formularioLogIn = new FormGroup({
      rut: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }
}