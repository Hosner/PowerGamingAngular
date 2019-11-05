import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Store} from "@ngrx/store";
import * as RespuestaActions from "../ngrx/respuesta.actions";
import {State} from "../ngrx/respuesta.reducer";
import {RespuestaService} from "../ngrx/respuesta.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit,OnDestroy {
  page: number = 1;

  datosPrecarga$ = this._respuestaService.inicioDatos();

  constructor(private store: Store<State>,
              private _translateService: TranslateService,
              private _respuestaService: RespuestaService) {
  }

  ngOnInit() {
    this.store.dispatch(RespuestaActions.inicioDatosRespuesta());
  }
  ngOnDestroy() {}
}
