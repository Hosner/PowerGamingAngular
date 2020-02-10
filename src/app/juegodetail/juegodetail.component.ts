import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Entrada} from "../shared/model/entrada";
import {DataService} from "../shared/servicios/data.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Edicion} from "../shared/model/edicion";
import {Store} from "@ngrx/store";
import {State} from "../redux/respuesta.reducer";
import * as RespuestaActions from '../redux/respuesta.actions';
import {RespuestaService} from "../redux/respuesta.service";
import {Subscription} from "rxjs";
import {NetworkService} from "../shared/servicios/network.service";
import {ModalService} from "../shared/servicios/modal.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-juegodetail',
  templateUrl: './juegodetail.component.html',
  styleUrls: ['./juegodetail.component.css'],
})
export class JuegodetailComponent implements OnInit,OnDestroy{
  page = 1;
  entrada = new Entrada();
  juego$ = this.respuestaService.juegoDetail();
  datosPrecarga$ = this.respuestaService.inicioDatos();

  private subscriptions: Subscription = new Subscription();

  controlAddCarrito: FormGroup;
  controlAddComentario: FormGroup;

  constructor(
    private respuestaService: RespuestaService,
    private router: ActivatedRoute,
    private dataService: DataService,
    private store: Store<State>,
    private networkService: NetworkService,
    private modalService: ModalService,
    private translateService:TranslateService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe(params => {this.entrada.IdJuego = params["id"]});
    this.dataService.entrada = this.entrada;
    this.store.dispatch(RespuestaActions.juegoDetail());
    this.store.dispatch(RespuestaActions.inicioDatosRespuesta());

    this.controlAddComentario = new FormGroup({
      comentarios: new FormControl()
    });
    this.controlAddCarrito = new FormGroup({
      edicion: new FormControl()
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  addJuego(id) {
    let entrada = new Entrada();
    entrada.IdLogin = this.dataService.usuarioLoggeado.idLogin;
    entrada.IdJuego = id;
    this.subscriptions.add(this.networkService.sendRequest("AddJuegoBiblioteca", entrada).subscribe(respuesta => {
      if (respuesta.Status === "OK") {
        window.location.reload();
      } else {
        this.dataService.menssageModal = this.translateService.instant(respuesta.StatusMsg);
      }
    }))
  }

  OnSubmitCarrito(ediciones : Edicion[]) {

  }

  OnSubmitComentario() {

  }

}
