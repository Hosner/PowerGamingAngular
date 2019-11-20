import {NgModule, Pipe} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador.component';
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {FilterPipe} from "../shared/utils/filter.pipe";


@NgModule({
  declarations: [BuscadorComponent, FilterPipe],
  exports: [
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule,
    NgbPaginationModule,
    FormsModule,

  ]
})
export class BuscadorModule { }
