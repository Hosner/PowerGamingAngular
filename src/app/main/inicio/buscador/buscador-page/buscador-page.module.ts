import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuscadorModule} from '../buscador.module';
import {TranslateModule} from "@ngx-translate/core";
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

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
