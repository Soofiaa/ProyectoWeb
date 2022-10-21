import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PieComponent } from './componentes/pie/pie.component';

import { PerfilProfesorComponent } from './paginas/perfil-profesor/perfil-profesor.component';
import { AsignaturaProfesorComponent } from './paginas/asignatura-profesor/asignatura-profesor.component';
import { PerfilAlumnoComponent } from './paginas/perfil-alumno/perfil-alumno.component';
import { AsignaturaAlumnoComponent } from './paginas/asignatura-alumno/asignatura-alumno.component';
import { IngresoAulaVirtualComponent } from './paginas/ingreso-aula-virtual/ingreso-aula-virtual.component';
import { RecuperarContrasenaComponent } from './paginas/recuperar-contrasena/recuperar-contrasena.component';
import { RecuperarContrasenaListoComponent } from './paginas/recuperar-contrasena-listo/recuperar-contrasena-listo.component';
import { NuevaContrasenaComponent } from './paginas/nueva-contrasena/nueva-contrasena.component';
import { NuevaContrasenaListaComponent } from './paginas/nueva-contrasena-lista/nueva-contrasena-lista.component';
import { EditarAsignaturaComponent } from './paginas/editar-asignatura/editar-asignatura.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    PerfilProfesorComponent,
    AsignaturaProfesorComponent,
    IngresoAulaVirtualComponent,
    PerfilAlumnoComponent,
    AsignaturaAlumnoComponent,
    IngresoAulaVirtualComponent,
    RecuperarContrasenaComponent,
    RecuperarContrasenaListoComponent,
    NuevaContrasenaComponent,
    NuevaContrasenaListaComponent,
    EditarAsignaturaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
