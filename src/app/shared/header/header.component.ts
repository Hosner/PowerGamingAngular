import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataService} from "../servicios/data.service";
import {Router} from "@angular/router";
import {RespuestaService} from "../../redux/respuesta.service";
import {Respuesta} from "../model/respuesta";
import {HttpClient} from "@angular/common/http";
import {NetworkService} from "../servicios/network.service";
import {Entrada} from "../model/entrada";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  respuesta: Respuesta;

  constructor(private dataService:DataService,
              private respuestaService: RespuestaService,
              private router: Router,
              private http: HttpClient,
              private networkService: NetworkService) { }

  ngOnInit() {
    console.log(this.dataService);
  }

  logOut() {
    let entrada = new Entrada();
    entrada.IdLogin = this.dataService.usuarioLoggeado.idLogin;
    this.networkService.sendRequest("Usuario", entrada).subscribe(value => {
      if(value.Status == "OK") {
        window.location.reload();
      }else{

      }
    });
    localStorage.clear();
    this.dataService.usuarioLoggeado = null;
    this.dataService.idLogin = null;
  }
}
