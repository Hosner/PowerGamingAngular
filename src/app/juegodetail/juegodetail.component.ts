import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NetworkService} from "../shared/servicios/network.service";
import {Entrada} from "../shared/model/entrada";
import {DataService} from "../shared/servicios/data.service";
import {FormGroup} from "@angular/forms";
import {Edicion} from "../shared/model/edicion";
import {Store} from "@ngrx/store";
import {State} from "../redux/respuesta.reducer";
import * as RespuestaActions from '../redux/respuesta.actions';
import {RespuestaService} from "../redux/respuesta.service";

@Component({
  selector: 'app-juegodetail',
  templateUrl: './juegodetail.component.html',
  styleUrls: ['./juegodetail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JuegodetailComponent implements OnInit {
  page = 1;
  entrada = new Entrada();
  controlAddCarrito: FormGroup;
  controlAddComentario: FormGroup;

  juego$ = this.respuestaService.juegoDetail();
  datosPrecarga$ = this.respuestaService.inicioDatos();

  constructor(
    private respuestaService: RespuestaService,
    private router: ActivatedRoute,
    private networkService: NetworkService,
    private dataService: DataService,
    private store: Store<State>
  ) {
    this.router.params.subscribe(params => {this.entrada.IdJuego = params["id"]});
    this.dataService.entrada = this.entrada;
    this.store.dispatch(RespuestaActions.juegoDetail());
  }

  ngOnInit() {}

  addJuego(id) {
    let entrada = new Entrada();
    entrada.usuario.idLogin = this.dataService.usuarioLoggeado.idLogin;
    entrada.IdJuego = id;
  }

  OnSubmitCarrito(ediciones : Edicion[]) {

  }

  OnSubmitComentario() {

  }
}
