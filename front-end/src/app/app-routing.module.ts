import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarUsuarioComponent } from './components/agregar-editar-usuario/agregar-editar-usuario.component';
import { UsuarioDetalleComponent } from './components/usuario-detalle/usuario-detalle.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ActividadesComponent } from './components/actividades/actividades.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'agregarUsuario', component: AgregarEditarUsuarioComponent },
  { path: 'verUsuario/:id', component: UsuarioDetalleComponent },
  { path: 'editarUsuario/:id', component: AgregarEditarUsuarioComponent },
  { path: '**', redirectTo: 'usuarios', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
