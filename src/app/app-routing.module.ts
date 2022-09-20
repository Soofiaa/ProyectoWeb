import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { GaleriaComponent } from './paginas/galeria/galeria.component';
import { IngresoAulaVirtualComponent } from './paginas/ingreso-aula-virtual/ingreso-aula-virtual.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { PerfilAulaVirtualComponent } from './paginas/perfil-aula-virtual/perfil-aula-virtual.component';
import { Asignatura1Component } from './paginas/perfilAulaVirtual/asignatura1/asignatura1.component';
import { VerMasComponent } from './paginas/ver-mas/ver-mas.component';

/* rutas para cada pagina del sitio web*/
const routes: Routes = [
  {path: '', component: InicioComponent },
  {path: 'contacto', component: ContactoComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'ingreso-aula-virtual', component: IngresoAulaVirtualComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'perfil-aula-virtual', component: PerfilAulaVirtualComponent},
  {path: 'perfil-aula-virtual/asignatura1', component: Asignatura1Component},
  {path: 'galeria/verMasX', component: VerMasComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
