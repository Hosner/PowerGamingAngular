import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForgetpassComponent} from "./forgetpass/forgetpass.component";
import {RegistroComponent} from "./registro/registro.component";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ForgetpassComponent,
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
