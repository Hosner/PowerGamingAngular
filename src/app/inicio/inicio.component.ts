import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';
import * as RespuestaActions from '../redux/respuesta.actions';
import {State} from '../redux/respuesta.reducer';
import {RespuestaService} from '../redux/respuesta.service';
import {DataService} from "../shared/servicios/data.service";


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InicioComponent implements OnInit{

  datosPrecarga$ = this.respuestaService.inicioDatos();

  constructor(private store: Store<State>,
              private translateService: TranslateService,
              private respuestaService: RespuestaService,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.store.dispatch(RespuestaActions.inicioDatosRespuesta());
  }

}
