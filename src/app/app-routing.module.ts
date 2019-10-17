import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './main/inicio/inicio.component';
import {LoginComponent} from './main/login/login.component';
import {ConfiguracionComponent} from './main/configuracion/configuracion.component';
import {BibliotecaComponent} from './main/biblioteca/biblioteca.component';
import {ContactoComponent} from './main/contacto/contacto.component';
import {JuegodetailComponent} from './main/juegodetail/juegodetail.component';
import {BuscadorPageComponent} from './main/inicio/buscador/buscador-page/buscador-page.component';
import {ForgetpassComponent} from './main/login/forgetpass/forgetpass.component';
import {RegistroComponent} from './main/login/registro/registro.component';
import {ErrorComponent} from "./shared/error/error.component";


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'biblioteca', component: BibliotecaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'inicio/detalle/:id', component: JuegodetailComponent},
  {path: 'biblioteca/detalle/:id', component: JuegodetailComponent},
  {path: 'buscador-page/detalle/:id', component: JuegodetailComponent},
  {path: 'detalle/:id', component: JuegodetailComponent},
  {path: 'buscador-page', component: BuscadorPageComponent},
  {path: 'forgetpass', component: ForgetpassComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'error', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
