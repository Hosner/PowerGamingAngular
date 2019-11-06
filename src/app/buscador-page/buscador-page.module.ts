import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {BuscadorModule} from "../buscador/buscador.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BuscadorModule,
    TranslateModule,
    NgbPaginationModule
  ],
  exports: [
    BuscadorModule
  ]
})
export class BuscadorPageModule { }
