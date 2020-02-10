import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';

import {DataService} from '../shared/servicios/data.service';
import {RespuestaService} from '../redux/respuesta.service';
import {Entrada} from "../shared/model/entrada";
import {Subscription} from "rxjs";
import {NetworkService} from "../shared/servicios/network.service";
import {ModalService} from "../shared/servicios/modal.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-buscador-page',
  templateUrl: './buscador-page.component.html',
  styleUrls: ['./buscador-page.component.css'],
})
export class BuscadorPageComponent implements OnInit, OnDestroy {
  page = 1;

  search: string;

  juegosSearch = this.respuestaService.resultadoBuscador();
  private subscriptions: Subscription = new Subscription();

  constructor(private dataService: DataService,
              private respuestaService: RespuestaService,
              private networkService: NetworkService,
              private modalService: ModalService,
              private translateService:TranslateService
             ) { }

  ngOnInit() {

  }

  ngOnDestroy() {
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
}
