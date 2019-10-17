import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {NetworkService} from './shared/servicios/network.service';
import {DataService} from './shared/servicios/data.service';
import {Entrada} from './shared/model/entrada';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor( private _translateService: TranslateService,
               private _networkService: NetworkService,
               private _dataService: DataService) {
    _translateService.setDefaultLang("es");
    _translateService.use("es");
  }


  ngOnInit(): void {
    let entrada = new Entrada();
    this._networkService.sendRequest("Inicio", entrada,"DatosPrecarga").subscribe(respuesta => {
      if (respuesta.Status === "OK"){
        this._dataService.provincias = respuesta.Provincias;
        this._dataService.categorias = respuesta.Categorias;
        this._dataService.creadores = respuesta.Creadores;
        this._dataService.idiomas = respuesta.Idiomas;
        this._dataService.formatos = respuesta.Formatos;
        this._dataService.paises = respuesta.Pais;
        this._dataService.tipoEdiciones = respuesta.TipoEdiciones;
        this._dataService.plataformas = respuesta.Plataformas;
      }
    }).unsubscribe();
  }
}
