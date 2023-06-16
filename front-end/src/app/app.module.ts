import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarUsuarioComponent } from './components/agregar-editar-usuario/agregar-editar-usuario.component';
import { UsuarioDetalleComponent } from './components/usuario-detalle/usuario-detalle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShredModule } from './shred/shred.module';
import { SpinnerComponent } from './shred/spinner/spinner.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { SidenavComponent } from './shred/sidenav/sidenav.component';
import { ToolbarComponent } from './shred/toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarUsuarioComponent,
    UsuariosComponent,
    UsuarioDetalleComponent,
    SpinnerComponent,
    ActividadesComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShredModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
