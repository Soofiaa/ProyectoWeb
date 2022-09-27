import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PieComponent } from './componentes/pie/pie.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { GaleriaComponent } from './paginas/galeria/galeria.component';
import { VerMasComponent } from './paginas/ver-mas/ver-mas.component';
import { PerfilProfesorComponent } from './paginas/perfil-profesor/perfil-profesor.component';
import { AsignaturaProfesorComponent } from './paginas/asignatura-profesor/asignatura-profesor.component';
import { PerfilAlumnoComponent } from './paginas/perfil-alumno/perfil-alumno.component';
import { AsignaturaAlumnoComponent } from './paginas/asignatura-alumno/asignatura-alumno.component';
import { IngresoAulaVirtualComponent } from './paginas/ingreso-aula-virtual/ingreso-aula-virtual.component';
import { RecuperarContrasenaComponent } from './paginas/recuperar-contrasena/recuperar-contrasena.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    InicioComponent,
    ContactoComponent,
    NosotrosComponent,
    GaleriaComponent,
    VerMasComponent,
    PerfilProfesorComponent,
    AsignaturaProfesorComponent,
    IngresoAulaVirtualComponent,
    PerfilAlumnoComponent,
    AsignaturaAlumnoComponent,
    IngresoAulaVirtualComponent,
    RecuperarContrasenaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
