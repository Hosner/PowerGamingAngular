import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuscadorModule} from './buscador/buscador.module';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BuscadorModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    BuscadorModule
  ]
})
export class InicioModule { }
