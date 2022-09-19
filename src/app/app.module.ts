import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PieComponent } from './componentes/pie/pie.component';
import { RegistroAulaVirtualComponent } from './paginas/registro-aula-virtual/registro-aula-virtual.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { GaleriaComponent } from './paginas/galeria/galeria.component';
import { IngresoAulaVirtualComponent } from './paginas/ingreso-aula-virtual/ingreso-aula-virtual.component';
import { PerfilAulaVirtualComponent } from './paginas/perfil-aula-virtual/perfil-aula-virtual.component';
import { Asignatura1Component } from './paginas/perfilAulaVirtual/asignatura1/asignatura1.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    CabeceraComponent,
    PieComponent,
    RegistroAulaVirtualComponent,
    NosotrosComponent,
    GaleriaComponent,
    IngresoAulaVirtualComponent,
    PerfilAulaVirtualComponent,
    Asignatura1Component
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
