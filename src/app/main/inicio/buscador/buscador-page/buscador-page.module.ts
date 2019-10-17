import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuscadorModule} from '../buscador.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BuscadorModule,
    TranslateModule
  ],
  exports: [
    BuscadorModule
  ]
})
export class BuscadorPageModule { }
