import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ErrorModule} from './shared/error/error.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {InicioComponent} from './inicio/inicio.component';


import {FooterComponent} from './shared/footer/footer.component';
import {HeaderComponent} from './shared/header/header.component';

import {CommonModule} from '@angular/common';
import {HeaderModule} from './shared/header/header.module';
import {FooterModule} from './shared/footer/footer.module';
import {InicioModule} from './inicio/inicio.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

import {ReactiveFormsModule} from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import {routerReducer, RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import {environment} from "../environments/environment";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RespuestaEffects } from './ngrx/respuesta-effects.service';
import { EntityDataModule } from '@ngrx/data';
import { ServiceWorkerModule } from '@angular/service-worker';
import {LoginModule} from "./login/login.module";
import {LoginComponent} from "./login/login.component";
import * as respuestaReduces from "./ngrx/respuesta.reducer";
import {NgxPaginationModule} from "ngx-pagination";
import {BuscadorModule} from "./buscador/buscador.module";
import {ContactoModule} from "./contacto/contacto.module";
import {ContactoComponent} from "./contacto/contacto.component";
import {BuscadorPageModule} from "./buscador-page/buscador-page.module";
import {BuscadorPageComponent} from "./buscador-page/buscador-page.component";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ContactoComponent,
    BuscadorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorModule,
    CommonModule,
    HeaderModule,
    FooterModule,
    InicioModule,
    LoginModule,
    ContactoModule,
    BuscadorPageModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgxPaginationModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
      {
        router: routerReducer
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    StoreModule.forFeature(
      respuestaReduces.respuestaReducer,
      respuestaReduces.RespuestaReducer
    ),
    EffectsModule.forRoot([RespuestaEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({routerState: RouterState.Minimal}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot(),
    EntityDataModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BuscadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
