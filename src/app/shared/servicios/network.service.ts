import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {DataService} from "./data.service";
import {Respuesta} from "../model/respuesta";
import {environment} from "../../../environments/environment";

/**
 *
 */
const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};

/**
 * Servicio para la conexión con back-end
 */
@Injectable({
    providedIn: 'root'
})
export class NetworkService {
    /**
     * Servicio de back
     */

    constructor(private httpClient: HttpClient,
                private dataService: DataService) {
    }

    /**
     * Metodo que gestiona la entrada para la peticion de back
     * @param metodoPeticion {string} metodo de la peticion
     * @param entrada {Entrada} entrada de la peticion
     */
    public sendRequest(metodoPeticion: string, entrada:any): Observable<Respuesta> {
      if(!this.dataService.usuarioLoggeado){
        return this.httpClient.post<Respuesta>(`${environment.servers.urlPowerGaming}`,
          {
            Metodo: metodoPeticion,
            IdiomaWeb: this.dataService.idiomaWeb,
            Entrada: entrada
          }, httpOptions);
      }else {
        return this.httpClient.post<Respuesta>(`${environment.servers.urlPowerGaming}`,
          {
            Metodo: metodoPeticion,
            IdLogin: this.dataService.usuarioLoggeado.idLogin,
            IdiomaWeb: this.dataService.idiomaWeb,
            Entrada: entrada
          }, httpOptions);
      }
    }


    public sendRequestId(): Observable<Respuesta>{
      return this.httpClient.post<Respuesta>(`${environment.servers.urlPowerGaming}`,
        {IdLogin: this.dataService.usuarioLoggeado.idLogin, IdiomaWeb: this.dataService.idiomaWeb}, httpOptions);
    }
}
