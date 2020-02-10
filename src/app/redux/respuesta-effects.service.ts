import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {concatMap, map} from 'rxjs/operators';
import {Respuesta} from '../shared/model/respuesta';
import * as RespuestaActions from './/respuesta.actions';
import {environment} from '../../environments/environment';
import {DataService} from '../shared/servicios/data.service';
import {Juego} from '../shared/model/juego';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};

@Injectable()
export class RespuestaEffects {

  inicioDatosEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RespuestaActions.inicioDatosRespuesta),
      concatMap(() =>
        this.http.post<Respuesta>(`${environment.servers.urlPowerGaming}`,
          {
            Metodo: 'Inicio',
            IdiomaWeb: this.dataService.idiomaWeb,
            Entrada: this.dataService.entrada
          },
          httpOptions).pipe(
          map(respuesta => RespuestaActions.inicioDatosRespuestaSuccess({success: respuesta}))
        )
      )
    )  );

  buscadorResultado$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RespuestaActions.buscadorResultadoRespuesta),
      concatMap(() =>
        this.http.post<Respuesta>(`${environment.servers.urlPowerGaming}`,
          {
            Metodo: 'Buscador',
            IdLogin: this.dataService.usuarioLoggeado ? this.dataService.usuarioLoggeado.idLogin : "",
            IdiomaWeb: this.dataService.idiomaWeb,
            Entrada: this.dataService.entrada
          },
          httpOptions).pipe(
          map(respuesta => RespuestaActions.buscadorResultadoSuccess({success: respuesta.JuegosSearch}))
        )
      )
    )
  );

  juegoDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RespuestaActions.juegoDetail),
      concatMap(() =>
        this.http.post<Respuesta>(`${environment.servers.urlPowerGaming}`,
          {
            Metodo: 'Juego',
            IdLogin: this.dataService.usuarioLoggeado ? this.dataService.usuarioLoggeado.idLogin : "",
            IdiomaWeb: this.dataService.idiomaWeb,
            Entrada: this.dataService.entrada
          },
          httpOptions).pipe(
          map(respuesta => RespuestaActions.juegoDetailSuccess({success: respuesta}))
        )
      )
    )
  );

  juegoBiblioteca$ = createEffect(() =>
  this.actions$.pipe(
    ofType(RespuestaActions.bibliotecaRespuesta),
    concatMap(() =>
      this.http.post<Respuesta>( `${environment.servers.urlPowerGaming}`,
      {
        Metodo: 'Biblioteca',
        IdLogin: this.dataService.usuarioLoggeado.idLogin,
        IdiomaWeb: this.dataService.idiomaWeb
      },
      httpOptions).pipe(
      map(respuesta => RespuestaActions.bibliotecaRespuestaSuccess({success: respuesta}))))
  ));

  constructor(private actions$: Actions,
              private http: HttpClient,
              private dataService: DataService) {
  }
}
