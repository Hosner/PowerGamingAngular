import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BuscadorModule} from "../buscador/buscador.module";
import { InicioDetailComponent } from './inicio-detail/inicio-detail.component';
import {NgxPaginationModule} from "ngx-pagination";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [InicioDetailComponent],
  imports: [
    CommonModule,
    BuscadorModule,
    NgxPaginationModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    InicioDetailComponent
  ]
})
export class InicioModule { }
