import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-nueva-contrasena',
  templateUrl: './nueva-contrasena.component.html',
  styleUrls: ['./nueva-contrasena.component.scss']
})
export class NuevaContrasenaComponent{
  resultado!: string;

  formularioNuevaContrasena = new FormGroup({
    contrasena: new FormControl('', [Validators.required, Validators.minLength(8)]),
    copiaContrasena: new FormControl('', [Validators.required]),
  });

  submit() {
    if (this.formularioNuevaContrasena.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }

}