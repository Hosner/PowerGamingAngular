import {Component, OnDestroy, OnInit, Renderer, Renderer2, RendererFactory2, ViewChild} from '@angular/core';
import {DataService} from "../shared/servicios/data.service";
import {TranslateService} from "@ngx-translate/core";
import {FormControl, FormGroup} from "@angular/forms";
import {NetworkService} from "../shared/servicios/network.service";
import {Entrada} from "../shared/model/entrada";
import {Router} from "@angular/router";
import {RespuestaService} from "../ngrx/respuesta.service";


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit,OnDestroy {
  controlBuscador: FormGroup;

  searchStr: string;

  datosPrecarga$ = this._respuestaService.inicioDatos();

/*  @ViewChild('hijo', {static: false}) hijo: BuscadorPageComponent;*/

  constructor(private _dataService:DataService,
              private _translateService: TranslateService,
              private _networkService: NetworkService,
              private router: Router,
              private _respuestaService: RespuestaService,
              private renderer: Renderer2
             ) {

  }


  ngOnInit() {
    this.controlBuscador = new FormGroup({
        categorias: new FormControl(),
        creador: new FormControl(),
        plataformas: new FormControl(),
        idiomas: new FormControl(),
        anho: new FormControl(),
        nombre: new FormControl()
    });
  }

  ngOnDestroy() {}

  ver(n:number) {
    this.renderer.addClass(document.getElementById("meumenudes"+n),"d-block");
  }

  ocultar(n:number) {
    this.renderer.removeClass(document.getElementById("meumenudes"+n),"d-block");
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


    /*this.subscriptions.add(this._networkService.sendRequest("Juego",entrada, "Buscar").subscribe(respuesta =>{
        if (respuesta.Status == "OK"){
            this.hijo.juegosSearch = respuesta.JuegosSearch;
            this.router.navigate(['/buscador-page']);
        }
    }));*/
  }
}
