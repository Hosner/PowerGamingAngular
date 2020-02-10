import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataService} from "../servicios/data.service";
import {Router} from "@angular/router";
import {RespuestaService} from "../../redux/respuesta.service";
import {Respuesta} from "../model/respuesta";
import {HttpClient} from "@angular/common/http";
import {NetworkService} from "../servicios/network.service";
import {Entrada} from "../model/entrada";
import {ModalService} from "../servicios/modal.service";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  respuesta: Respuesta;

  constructor(private dataService:DataService,
              private respuestaService: RespuestaService,
              private router: Router,
              private http: HttpClient,
              private networkService: NetworkService,
              private modalService: ModalService,
              private translateService: TranslateService) { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem("IdSession"))){
      this.dataService.usuarioLoggeado = JSON.parse(localStorage.getItem("IdSession"));
      this.networkService.sendRequestId().subscribe(value => {
        if(value.Status === "KO" && value.StatusMsg === "E6"){
          this.dataService.usuarioLoggeado = undefined;
        }
      }).unsubscribe();
    }
  }

  logOut() {
    let entrada = new Entrada();
    entrada.IdLogin = this.dataService.usuarioLoggeado.idLogin;
    this.networkService.sendRequest("Usuario", entrada).subscribe(value => {
      if(value.Status == "OK") {
        this.router.navigate(['/inicio']);
      }else{
        this.dataService.menssageModal = this.translateService.instant(value.StatusMsg);

      }
    }).unsubscribe();
    localStorage.removeItem("IdSession");
    this.dataService.usuarioLoggeado = undefined;
  }
}
