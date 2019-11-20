import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';

import {DataService} from '../shared/servicios/data.service';
import {RespuestaService} from '../redux/respuesta.service';

@Component({
  selector: 'app-buscador-page',
  templateUrl: './buscador-page.component.html',
  styleUrls: ['./buscador-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuscadorPageComponent implements OnInit, OnDestroy {
  page = 1;

  search: string;

  juegosSearch = this.respuestaService.resultadoBuscador();


  constructor(private dataService: DataService,
              private respuestaService: RespuestaService
             ) { }

  ngOnInit() {

  }

  ngOnDestroy() {
  }

  addJuego(id) {

  }
}
