import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NetworkService} from "../shared/servicios/network.service";
import {DataService} from "../shared/servicios/data.service";
import {Store} from "@ngrx/store";
import {State} from "../redux/respuesta.reducer";
import * as RespuestaActions from '../redux/respuesta.actions';
import {RespuestaService} from "../redux/respuesta.service";
import {Subscription} from "rxjs";
import {Entrada} from "../shared/model/entrada";
import {Edicion} from "../shared/model/edicion";
import {ModalService} from "../shared/servicios/modal.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit, OnDestroy  {
  private subscriptions: Subscription = new Subscription();
  page = 1;
  biblioteca$ = this.respuestaService.juegoBiblioteca();
  datosPrecarga$ = this.respuestaService.inicioDatos();

  constructor(private modalService : ModalService,
              private translateService: TranslateService,
              private networkService: NetworkService,
              private dataService: DataService,
              private router: Router,
              private store: Store<State>,
              private respuestaService: RespuestaService,
              ) {
  }

  ngOnInit(): void {
    if (this.dataService.usuarioLoggeado) {
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
    entrada.IdLogin = this.dataService.usuarioLoggeado.idLogin;
    entrada.IdJuego = id;
    this.subscriptions.add(this.networkService.sendRequest("DeleteJuegoBiblioteca", entrada).subscribe(respuesta => {
      if (respuesta.Status === "OK") {
        window.location.reload();
      } else {
      }
    }))
  }

  OnSubmitCarrito(ediciones: Edicion[]) {

  }

  cambiarPuntuacion(valor, id) {
    let entrada = new Entrada();
    entrada.IdLogin = this.dataService.usuarioLoggeado.idLogin;
    entrada.IdJuego = id;
    entrada.Puntuacion = valor;
    this.subscriptions.add(this.networkService.sendRequest("Puntuacion", entrada).subscribe(respuesta => {
      if (respuesta.Status === "KO") {
        if(respuesta.StatusMsg === "E6"){
          this.dataService.menssageModal = this.translateService.instant(respuesta.StatusMsg);
        }
      }
    }))
  }

}
