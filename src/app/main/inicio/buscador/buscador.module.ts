import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador.component';
import {BuscadorPageComponent} from './buscador-page/buscador-page.component';
import {FilterPipe} from "../../../shared/pipes/filter.pipe";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [BuscadorComponent, BuscadorPageComponent, FilterPipe],
  exports: [
    BuscadorComponent,
    BuscadorPageComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule,
    NgbPaginationModule,

  ]
})
export class BuscadorModule { }
