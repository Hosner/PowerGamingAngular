import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Constants} from "../../utils/constants";
import {DataService} from "../../servicios/data.service";
import * as RespuestaActions from "../../../ngrx/respuesta.actions";
import {Store} from "@ngrx/store";
import {State} from "../../../ngrx/respuesta.reducer";

@Component({
  selector: 'app-languaje',
  templateUrl: './languaje.component.html',
  styleUrls: ['./languaje.component.css']
})
export class LanguajeComponent implements OnInit {
  constructor(private _translateService: TranslateService,
              private _dataService: DataService,
              private store: Store<State>) { }

  ngOnInit() {
  }

  changeLanguage(idioma: string){
    if (idioma) {
      this._translateService.use(Constants.AVALIABLE_LANGUAGES_ID.filter(i => i.id === idioma)[0].id);
      this._dataService.idiomaWeb = idioma;
      this.store.dispatch(RespuestaActions.inicioDatosRespuesta());
    }
  }
}
