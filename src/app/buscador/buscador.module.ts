import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador.component';
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {PipesModule} from "../shared/utils/pipes.module";


@NgModule({
  declarations: [BuscadorComponent],
  exports: [
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule,
    NgbPaginationModule,
    PipesModule,

  ]
})
export class BuscadorModule { }
