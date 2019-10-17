import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuscadorModule} from './buscador/buscador.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BuscadorModule
  ],
  exports: [
    BuscadorModule
  ]
})
export class InicioModule { }
