import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../../shared/servicios/data.service";
import {TranslateService} from "@ngx-translate/core";
import {FormControl, FormGroup} from "@angular/forms";
import {NetworkService} from "../../../shared/servicios/network.service";
import {Entrada} from "../../../shared/model/entrada";
import {Juego} from "../../../shared/model/juego";
import {Router} from "@angular/router";
import {BuscadorPageComponent} from "./buscador-page/buscador-page.component";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit,OnDestroy {
  controlBuscador: FormGroup;
  private subscriptions: Subscription = new Subscription();

  @ViewChild('hijo', {static: false}) hijo: BuscadorPageComponent;

  constructor(private _dataService:DataService,
              private _translateService: TranslateService,
              private _networkService: NetworkService,
              private router: Router,
             ) {

  }


  ngOnInit() {
    this.controlBuscador = new FormGroup({
        categorias: new FormControl(),
        creadores: new FormControl(),
        plataformas: new FormControl(),
        idiomas: new FormControl(),
        anhos: new FormControl(),
        nombre: new FormControl()
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  ver(n:number) {
    /*this.renderer.addClass(document.getElementById("meumenudes"+n),".block");*/
  }

  ocultar(n:number) {
    /*this.renderer.addClass(document.getElementById("meumenudes"+n),".none");*/
  }

  OnSubmit(){
    let entrada = new Entrada();
    entrada.Categorias = this.controlBuscador.get("categorias").value;
    entrada.Idiomas = this.controlBuscador.get("idiomas").value;
    entrada.Plataformas = this.controlBuscador.get("plataformas").value;
    entrada.Creador = this.controlBuscador.get("creador").value;
    entrada.Nombre = this.controlBuscador.get("nombre").value;
    entrada.Fecha = this.controlBuscador.get("anho").value;
    entrada.IdLogin = this._dataService.usuarioLoggeado.idLogin;
    this.subscriptions.add(this._networkService.sendRequest("Juego",entrada, "Buscar").subscribe(respuesta =>{
        if (respuesta.Status == "OK"){
            this.hijo.juegosSearch = respuesta.JuegosSearch;
            this.router.navigate(['/buscador-page']);
        }
    }));
  }
}
