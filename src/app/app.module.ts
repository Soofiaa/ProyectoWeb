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
import { IngresoAulaVirtualComponent } from './paginas/ingreso-aula-virtual/ingreso-aula-virtual.component';
import { PerfilAulaVirtualComponent } from './paginas/perfil-aula-virtual/perfil-aula-virtual.component';
import { AsignaturaComponent } from './paginas/asignatura/asignatura.component';
import { VerMasComponent } from './paginas/ver-mas/ver-mas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    CabeceraComponent,
    PieComponent,
    NosotrosComponent,
    GaleriaComponent,
    IngresoAulaVirtualComponent,
    PerfilAulaVirtualComponent,
    AsignaturaComponent,
    VerMasComponent
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
