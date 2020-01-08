import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {Juego} from "../shared/model/juego";
import {Itembiblioteca} from "../shared/model/itembiblioteca";
import {FormGroup} from "@angular/forms";
import {NetworkService} from "../shared/servicios/network.service";
import {DataService} from "../shared/servicios/data.service";
import {Entrada} from "../shared/model/entrada";
import {Edicion} from "../shared/model/edicion";
import {Store} from "@ngrx/store";
import {State} from "../redux/respuesta.reducer";
import * as RespuestaActions from '../redux/respuesta.actions';
import {RespuestaService} from "../redux/respuesta.service";


@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit, OnDestroy {
  page = 1;

  biblioteca$ = this.respuestaService.juegoBiblioteca();
  datosPrecarga$ = this.respuestaService.inicioDatos();

  private subscriptions: Subscription = new Subscription();

  constructor(private _networkService: NetworkService,
              private _dataService: DataService,
              private router: Router,
              private store: Store<State>,
              private respuestaService: RespuestaService) {
  }

  ngOnInit(): void {
    if (this._dataService.usuarioLoggeado) {
      this.store.dispatch(RespuestaActions.bibliotecaRespuesta());
      this.store.dispatch(RespuestaActions.inicioDatosRespuesta());
    }else{
      this.router.navigate(['/error']);
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  delete(id) {
    let entrada = new Entrada();
    entrada.IdLogin = this._dataService.usuarioLoggeado.idLogin;
    entrada.IdJuego = id;
    this.subscriptions.add(this._networkService.sendRequest("DeleteJuegoBiblioteca", entrada).subscribe(respuesta => {
      if (respuesta.Status === "OK") {

      } else {

      }
    }))
  }

  OnSubmitCarrito(ediciones: Edicion[]) {

  }

  cambiarPuntuacion(id) {
    let entrada = new Entrada();
    entrada.IdLogin = this._dataService.usuarioLoggeado.idLogin;
    entrada.IdJuego = id;
    this.subscriptions.add(this._networkService.sendRequest("Puntuacion", entrada).subscribe(respuesta => {
      if (respuesta.Status === "OK") {

      } else {

      }
    }))
  }
}
