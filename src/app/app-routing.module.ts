import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilAlumnoComponent } from './paginas/perfil-alumno/perfil-alumno.component'; // INGRESO ALUMNO
import { PerfilProfesorComponent } from './paginas/perfil-profesor/perfil-profesor.component';  // INGRESO PROFESOR
import { AsignaturaProfesorComponent } from './paginas/asignatura-profesor/asignatura-profesor.component';
import { AsignaturaAlumnoComponent } from './paginas/asignatura-alumno/asignatura-alumno.component';
import { IngresoAulaVirtualComponent } from './paginas/ingreso-aula-virtual/ingreso-aula-virtual.component';
import { IngresoAulaVirtualProfesorComponent } from './paginas/ingreso-aula-virtual-profesor/ingreso-aula-virtual-profesor.component';
import { RecuperarContrasenaComponent } from './paginas/recuperar-contrasena/recuperar-contrasena.component';
import { RecuperarContrasenaListoComponent } from './paginas/recuperar-contrasena-listo/recuperar-contrasena-listo.component';
import { NuevaContrasenaComponent } from './paginas/nueva-contrasena/nueva-contrasena.component';
import { NuevaContrasenaListaComponent } from './paginas/nueva-contrasena-lista/nueva-contrasena-lista.component';
import { EditarAsignaturaComponent } from './paginas/editar-asignatura/editar-asignatura.component';

/* rutas para cada pagina del sitio web*/
const routes: Routes = [
  {path: '', component: IngresoAulaVirtualComponent},
  {path: 'ingreso-aula-virtual-profesor', component: IngresoAulaVirtualProfesorComponent},
  {path: 'perfil-profesor', component: PerfilProfesorComponent},
  {path: 'perfil-profesor/asignatura-profesor', component: AsignaturaProfesorComponent},
  {path: 'perfil-alumno', component: PerfilAlumnoComponent},
  {path: 'perfil-alumno/asignatura-alumno', component: AsignaturaAlumnoComponent},
  {path: 'recuperar-contrasena', component: RecuperarContrasenaComponent},
  {path: 'recuperar-contrasena-listo', component: RecuperarContrasenaListoComponent},
  {path: 'nueva-contrasena', component: NuevaContrasenaComponent},
  {path: 'nueva-contrasena-lista', component: NuevaContrasenaListaComponent},
  {path: 'perfil-profesor/asignatura-profesor/editar-asignatura', component: EditarAsignaturaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
