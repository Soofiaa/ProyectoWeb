import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-nueva-contrasena',
  templateUrl: './nueva-contrasena.component.html',
  styleUrls: ['./nueva-contrasena.component.scss']
})
export class NuevaContrasenaComponent implements OnInit{
  resultado!: string;
  formularioNuevaContrasena: FormGroup = {} as FormGroup;

  constructor(private FormBuilder: FormBuilder){

  }

  ngOnInit(): void{
    let form = {
      contrasena: ['',Validators.required],
      copiaContrasena: ['',Validators.required],
    }
    this.formularioNuevaContrasena = this.FormBuilder.group(form, {validator:this.checkPasswords});
  }

  submit() {
    if (this.formularioNuevaContrasena.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }

  checkPasswords(group: FormGroup):  ValidationErrors | null {
    let pass = group.controls['contrasena'].value;
    let confirmPass = group.controls['copiaContrasena'].value;
    return pass === confirmPass ? null : { notSame: true }
  }
}