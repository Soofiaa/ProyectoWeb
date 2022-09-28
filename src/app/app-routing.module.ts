import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { GaleriaComponent } from './paginas/galeria/galeria.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { PerfilAlumnoComponent } from './paginas/perfil-alumno/perfil-alumno.component';
import { PerfilProfesorComponent } from './paginas/perfil-profesor/perfil-profesor.component';
import { VerMasComponent } from './paginas/ver-mas/ver-mas.component';
import { AsignaturaProfesorComponent } from './paginas/asignatura-profesor/asignatura-profesor.component';
import { AsignaturaAlumnoComponent } from './paginas/asignatura-alumno/asignatura-alumno.component';
import { IngresoAulaVirtualComponent } from './paginas/ingreso-aula-virtual/ingreso-aula-virtual.component';
import { RecuperarContrasenaComponent } from './paginas/recuperar-contrasena/recuperar-contrasena.component';
import { RecuperarContrasenaListoComponent } from './paginas/recuperar-contrasena-listo/recuperar-contrasena-listo.component';
import { NuevaContrasenaComponent } from './paginas/nueva-contrasena/nueva-contrasena.component';
import { NuevaContrasenaListaComponent } from './paginas/nueva-contrasena-lista/nueva-contrasena-lista.component';

/* rutas para cada pagina del sitio web*/
const routes: Routes = [
  {path: '', component: InicioComponent },
  {path: 'contacto', component: ContactoComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'galeria/ver-mas', component: VerMasComponent}, 
  {path: 'perfil-profesor', component: PerfilProfesorComponent},
  {path: 'perfil-profesor/asignatura-profesor', component: AsignaturaProfesorComponent},
  {path: 'perfil-alumno', component: PerfilAlumnoComponent},
  {path: 'perfil-alumno/asignatura-alumno', component: AsignaturaAlumnoComponent},
  {path: 'ingreso-aula-virtual', component: IngresoAulaVirtualComponent},
  {path: 'recuperar-contrasena', component: RecuperarContrasenaComponent},
  {path: 'recuperar-contrasena-listo', component: RecuperarContrasenaListoComponent},
  {path: 'nueva-contrasena', component: NuevaContrasenaComponent},
  {path: 'nueva-contrasena-lista', component: NuevaContrasenaListaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
