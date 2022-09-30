import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.scss']
})
export class RecuperarContrasenaComponent implements OnInit {
  resultado!: string;
  formularioRecuperarContrasena: FormGroup = {} as FormGroup;

  submit() {
    if (this.formularioRecuperarContrasena.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
  ngOnInit():void{
    this.formularioRecuperarContrasena = new FormGroup({
    correo: new FormControl('', [Validators.required]),
    });
  }
}