import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { LanguajeComponent } from './languaje/languaje.component';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [CarritoComponent, LanguajeComponent],
  exports: [
    CarritoComponent,
    LanguajeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ]
})
export class HeaderModule { }
