import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguajeComponent } from './languaje/languaje.component';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [LanguajeComponent],
  exports: [
    LanguajeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ]
})
export class HeaderModule { }
