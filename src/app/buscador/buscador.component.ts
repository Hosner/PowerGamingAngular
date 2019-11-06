import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {DataService} from "../shared/servicios/data.service";
import {TranslateService} from "@ngx-translate/core";
import {FormControl, FormGroup} from "@angular/forms";
import {RespuestaService} from "../ngrx/respuesta.service";
import * as RespuestaActions from "../ngrx/respuesta.actions";
import {Store} from "@ngrx/store";
import {State} from "../ngrx/respuesta.reducer";
import {Entrada} from "../shared/model/entrada";
import {Router} from "@angular/router";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit, OnDestroy {
  idioma: string[] = [];
  categorias: number[] = [];
  plataformas: number[] = [];

  controlBuscador: FormGroup;

  searchStr: string;

  datosPrecarga$ = this._respuestaService.inicioDatos();

  constructor(private _dataService: DataService,
              private _translateService: TranslateService,
              private _respuestaService: RespuestaService,
              private renderer: Renderer2,
              private store: Store<State>,
              private router: Router
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

  ngOnDestroy() {
  }

  ver(n: number) {
    this.renderer.addClass(document.getElementById("meumenudes" + n), "d-block");
  }

  ocultar(n: number) {
    this.renderer.removeClass(document.getElementById("meumenudes" + n), "d-block");
  }

  OnSubmit() {
    let entrada = new Entrada();
    if (this.controlBuscador.get("creador").value) {
      entrada.Creador = this.controlBuscador.get("creador").value;
    }
    if (this.controlBuscador.get("nombre").value) {
      entrada.Nombre = this.controlBuscador.get("nombre").value;
    }
    if (this.controlBuscador.get("anho").value) {
      entrada.Fecha = this.controlBuscador.get("anho").value;
    }
    if (this.idioma.length !== 0) {
      entrada.Idiomas = this.idioma;
    }
    if(this.plataformas.length !== 0){
      entrada.Plataformas = this.plataformas;
    }
    if(this.categorias.length !== 0){
      entrada.Categorias = this.categorias;
    }if(this.controlBuscador.get("nombre").value!=undefined){
      entrada.Nombre = this.controlBuscador.get("nombre").value;
    }
    this._dataService.entrada = entrada;
    this.store.dispatch(RespuestaActions.buscadorResultadoRespuesta());
    if(this._respuestaService.resultadoBuscador()){
      this.router.navigate(["/buscador-page"]);
    }
  }

  OnclickIdioma(idIdioma: string) {
    if (this.idioma) {
      this.idioma.push(idIdioma);
    } else {
      this.idioma.forEach((value, index) => {
        if (idIdioma === value) {
          this.idioma.splice(index, 1);
        } else {
          this.idioma.push(idIdioma);
        }
      });
    }
  }

  OnclickCategoria(idCategoria: number) {
    if (this.categorias) {
      this.categorias.push(idCategoria);
    } else {
      this.categorias.forEach((value, index) => {
        if (idCategoria === value) {
          this.categorias.splice(index, 1);
        } else {
          this.categorias.push(idCategoria);
        }
      });
    }
  }

  OnclickPlataforma(idPlataforma: number) {
    if (this.plataformas) {
      this.plataformas.push(idPlataforma);
    } else {
      this.plataformas.forEach((value, index) => {
        if (idPlataforma === value) {
          this.plataformas.splice(index, 1);
        } else {
          this.plataformas.push(idPlataforma);
        }
      });
    }
  }
}
