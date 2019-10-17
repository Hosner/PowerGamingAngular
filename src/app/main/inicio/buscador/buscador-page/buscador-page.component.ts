import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Juego} from "../../../../shared/model/juego";
import {DataService} from "../../../../shared/servicios/data.service";
import {Entrada} from "../../../../shared/model/entrada";
import {NetworkService} from "../../../../shared/servicios/network.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-buscador-page',
  templateUrl: './buscador-page.component.html',
  styleUrls: ['./buscador-page.component.css']
})
export class BuscadorPageComponent implements OnInit,OnDestroy {
  //Revisar
  @Input() juegosSearch:Juego[];
  private subscriptions: Subscription = new Subscription();
  constructor(private _dataService:DataService,
              private _networkService: NetworkService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  addJuego(id) {
    let entrada = new Entrada();
    entrada.usuario.idLogin = this._dataService.usuarioLoggeado.idLogin;
    entrada.IdJuego = id;
    this.subscriptions.add(this._networkService.sendRequest("Biblioteca",entrada,"AddJuego").subscribe(respuesta =>{
      if(respuesta.Status === "OK"){

      }else{

      }
    }));
  }
}
