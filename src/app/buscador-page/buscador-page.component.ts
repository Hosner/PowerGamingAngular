import {Component, OnDestroy, OnInit} from '@angular/core';

import {Observable, Subscription} from "rxjs";
import {DataService} from "../shared/servicios/data.service";
import {RespuestaService} from "../ngrx/respuesta.service";
import {Entrada} from "../shared/model/entrada";
import {Juego} from "../shared/model/juego";
import {Respuesta} from "../shared/model/respuesta";


@Component({
  selector: 'app-buscador-page',
  templateUrl: './buscador-page.component.html',
  styleUrls: ['./buscador-page.component.css']
})
export class BuscadorPageComponent implements OnInit,OnDestroy {
  page: number = 1;

  juegosSearch:Observable<Juego[]>;

  constructor(private _dataService:DataService,
              private _respuestaService: RespuestaService
             ) { }

  ngOnInit() {
    this.juegosSearch = this._respuestaService.resultadoBuscador();
  }

  ngOnDestroy() {
  }

  addJuego(id) {
    let entrada = new Entrada();
    entrada.usuario.idLogin = this._dataService.usuarioLoggeado.idLogin;
    entrada.IdJuego = id;

  }
}
