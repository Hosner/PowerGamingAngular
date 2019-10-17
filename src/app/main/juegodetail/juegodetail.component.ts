import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Juego} from '../../shared/model/juego';
import {NetworkService} from "../../shared/servicios/network.service";
import {Entrada} from "../../shared/model/entrada";
import {DataService} from "../../shared/servicios/data.service";
import {FormGroup} from "@angular/forms";
import {Itembiblioteca} from "../../shared/model/itembiblioteca";
import {Edicion} from "../../shared/model/edicion";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-juegodetail',
  templateUrl: './juegodetail.component.html',
  styleUrls: ['./juegodetail.component.css']
})
export class JuegodetailComponent implements OnInit,OnDestroy {
  id: string;
  idUrl = 'id';
  sub: any;
  juego: Juego;
  comentarios: Map<string,Itembiblioteca>;

  controlAddCarrito: FormGroup;
  controlAddComentario: FormGroup;
  private subscriptions: Subscription = new Subscription();
  constructor(
    private router: ActivatedRoute,
    private _networkService: NetworkService,
    private _dataService: DataService
  ) {
  }

  ngOnInit() {
    this.url();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  url() {
    this.sub = this.router.params.subscribe(params => {this.id = params[this.idUrl];});
    this.search(this.id);
  }

  search(id) {
    let entrada = new Entrada();
    entrada.IdJuego = id;
    this._networkService.sendRequest("Juego",entrada,"Juego").subscribe(respuesta =>{
        this.juego = respuesta.Juego;
        this.comentarios = respuesta.Comentarios;
    });
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

  OnSubmitCarrito(ediciones : Edicion[]) {

  }

  OnSubmitComentario() {

  }
}
