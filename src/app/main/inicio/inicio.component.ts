import {Component, OnDestroy, OnInit} from '@angular/core';
import {NetworkService} from "../../shared/servicios/network.service";
import {Entrada} from "../../shared/model/entrada";
import {Juego} from "../../shared/model/juego";
import {TranslateService} from "@ngx-translate/core";
import {DataService} from "../../shared/servicios/data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit,OnDestroy {
  allJuegos: Juego[];
  valoracionJuegos: Juego[];

  private subscriptions: Subscription = new Subscription();
  constructor(private _networkService: NetworkService,
              private _translateService: TranslateService,
              private _dataService: DataService) {
  }

  ngOnInit() {
    let entrada = new Entrada();
    this.subscriptions.add(this._networkService.sendRequest("Inicio", entrada, "DatosInicio").subscribe(respuesta => {
      if (respuesta.Status === "OK") {
        this.allJuegos = respuesta.Todos;
        this.valoracionJuegos = respuesta.Valoracion;
      }
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
