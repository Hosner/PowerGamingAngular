import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {DataService} from '../shared/servicios/data.service';
import {TranslateService} from '@ngx-translate/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RespuestaService} from '../redux/respuesta.service';
import * as RespuestaActions from '../redux/respuesta.actions';
import {Store} from '@ngrx/store';
import {State} from '../redux/respuesta.reducer';
import {Entrada} from '../shared/model/entrada';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuscadorComponent implements OnInit, OnDestroy {
  idioma: string[] = [];
  categorias: number[] = [];
  plataformas: number[] = [];

  controlBuscador: FormGroup;

  datosPrecarga$ = this.respuestaService.inicioDatos();

  constructor(private dataService: DataService,
              private translateService: TranslateService,
              private respuestaService: RespuestaService,
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
    this.renderer.addClass(document.getElementById('meumenudes' + n), 'd-block');
  }

  ocultar(n: number) {
    this.renderer.removeClass(document.getElementById('meumenudes' + n), 'd-block');
  }

  OnSubmit() {
    const entrada = new Entrada();
    if (this.controlBuscador.get('creador').value) {
      entrada.Creador = this.controlBuscador.get('creador').value;
    }
    if (this.controlBuscador.get('nombre').value) {
      entrada.Nombre = this.controlBuscador.get('nombre').value;
    }
    if (this.controlBuscador.get('anho').value) {
      entrada.Fecha = this.controlBuscador.get('anho').value;
    }
    if (this.idioma.length !== 0) {
      entrada.Idiomas = this.idioma;
    }
    if (this.plataformas.length !== 0) {
      entrada.Plataformas = this.plataformas;
    }
    if (this.categorias.length !== 0) {
      entrada.Categorias = this.categorias;
    }
    if (this.controlBuscador.get('nombre').value !== null) {
      entrada.Nombre = this.controlBuscador.get('nombre').value;
    }else{
      entrada.Nombre = "";
    }
    this.dataService.entrada = entrada;
    this.store.dispatch(RespuestaActions.buscadorResultadoRespuesta());
    if (this.respuestaService.resultadoBuscador()) {
      this.router.navigate(['/buscador-page']);
    }
  }

  OnclickIdioma(idIdioma: string, $event) {
    if ($event.target.checked) {
      this.idioma.push(idIdioma);
    } else {
      this.idioma.filter(value => {
        if (idIdioma === value) {
          const index = this.idioma.indexOf(value);
          this.idioma.splice(index, 1);
        }
      });
    }
  }

  OnclickCategoria(idCategoria: number, $event) {
    if ($event.target.checked) {
      this.categorias.push(idCategoria);
    } else {
      this.categorias.filter(value => {
        if (idCategoria === value) {
          const index = this.categorias.indexOf(value);
          this.categorias.splice(index, 1);
        }
      });
    }
  }

  OnclickPlataforma(idPlataforma: number, $event) {
    if ($event.target.checked) {
      this.plataformas.push(idPlataforma);
    } else {
      this.plataformas.filter(value => {
        if (idPlataforma === value) {
          const index = this.plataformas.indexOf(value);
          this.plataformas.splice(index, 1);
        }
      });
    }
  }
}
