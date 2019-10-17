import {Component, OnDestroy, OnInit} from '@angular/core';
import {NetworkService} from "../../shared/servicios/network.service";
import {Entrada} from "../../shared/model/entrada";
import {DataService} from "../../shared/servicios/data.service";
import {Juego} from "../../shared/model/juego";
import {FormGroup} from "@angular/forms";
import {Edicion} from "../../shared/model/edicion";
import {Itembiblioteca} from "../../shared/model/itembiblioteca";
import {Subscription} from "rxjs";
import {Router, RouterModule} from "@angular/router";


@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit, OnDestroy {

  JuegosEnBiblioteca: Juego[];
  Puntuaciones: Itembiblioteca[];

  controlAddCarrito: FormGroup;
  puntuar: FormGroup;

  private subscriptions: Subscription = new Subscription();

  constructor(private _networkService: NetworkService,
              private _dataService: DataService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this._dataService.usuarioLoggeado) {
      let entrada = new Entrada();
      entrada.IdLogin = this._dataService.usuarioLoggeado.idLogin;
      this.subscriptions.add(this._networkService.sendRequest("Biblioteca", entrada, "Biblioteca").subscribe(respuesta => {
        if (respuesta.Status === "OK") {
          this.JuegosEnBiblioteca = respuesta.JuegosBiblioteca;
          this.Puntuaciones = respuesta.Puntuacion;
        }
      }));
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
    this.subscriptions.add(this._networkService.sendRequest("Biblioteca", entrada, "DeleteJuego").subscribe(respuesta => {
      if (respuesta.Status === "OK") {

      } else {

      }
    }))
  }

  OnSubmitCarrito(ediciones: Edicion[]) {

  }

  cambiarPuntuacion(id: number) {
    let entrada = new Entrada();
    entrada.IdLogin = this._dataService.usuarioLoggeado.idLogin;
    entrada.Puntuacion = this.puntuar.get('puntuacion').value;
    this.subscriptions.add(this._networkService.sendRequest("Biblioteca", entrada, "DeleteJuego").subscribe(respuesta => {
      if (respuesta.Status === "OK") {

      } else {

      }
    }))
  }
}
