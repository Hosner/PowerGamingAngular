import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ErrorModule} from './shared/error/error.module';
import {LoadingModule} from './shared/loading/loading.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {InicioComponent} from './main/inicio/inicio.component';
import {LoginComponent} from './main/login/login.component';
import {ConfiguracionComponent} from './main/configuracion/configuracion.component';
import {BibliotecaComponent} from './main/biblioteca/biblioteca.component';
import {ContactoComponent} from './main/contacto/contacto.component';
import {FooterComponent} from './shared/footer/footer.component';
import {HeaderComponent} from './shared/header/header.component';
import {JuegodetailComponent} from './main/juegodetail/juegodetail.component';
import {CommonModule} from '@angular/common';
import {BuscadorModule} from './main/inicio/buscador/buscador.module';
import {HeaderModule} from './shared/header/header.module';
import {FooterModule} from './shared/footer/footer.module';
import {InicioModule} from './main/inicio/inicio.module';
import {RegistroModule} from './main/login/registro/registro.module';
import {ConfiguracionModule} from './main/configuracion/configuracion.module';
import {LoginModule} from './main/login/login.module';
import {JuegodetailModule} from './main/juegodetail/juegodetail.module';
import {ForgetpassModule} from './main/login/forgetpass/forgetpass.module';
import {BibliotecaModule} from './main/biblioteca/biblioteca.module';
import {ChangepassModule} from './main/login/forgetpass/changepass/changepass.module';
import {ContactoModule} from './main/contacto/contacto.module';
import {NotificationModule} from './shared/notification/notification.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {NotificationComponent} from './shared/notification/notification.component';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    ConfiguracionComponent,
    BibliotecaComponent,
    ContactoComponent,
    JuegodetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorModule,
    LoadingModule,
    CommonModule,
    BuscadorModule,
    HeaderModule,
    FooterModule,
    InicioModule,
    RegistroModule,
    ConfiguracionModule,
    LoginModule,
    JuegodetailModule,
    ForgetpassModule,
    ContactoModule,
    ChangepassModule,
    BibliotecaModule,
    NotificationModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgbPaginationModule,
    ReactiveFormsModule,
  ],
  entryComponents: [NotificationComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
