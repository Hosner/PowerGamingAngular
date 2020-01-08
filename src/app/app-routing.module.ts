import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {LoginComponent} from './login/login.component';

import {RegistroComponent} from './login/registro/registro.component';
import {ErrorComponent} from "./shared/error/error.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {BuscadorPageComponent} from "./buscador-page/buscador-page.component";
import {JuegodetailComponent} from "./juegodetail/juegodetail.component";
import {ConfiguracionComponent} from "./configuracion/configuracion.component";
import {BibliotecaComponent} from "./biblioteca/biblioteca.component";


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'biblioteca', component: BibliotecaComponent},/*
  {path: 'forgetpass', component: ForgetpassComponent},*/
  {path: 'detalle/:id', component: JuegodetailComponent},
  {path: 'buscador-page', component: BuscadorPageComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
