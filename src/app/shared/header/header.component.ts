import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataService} from "../servicios/data.service";
import {Router} from "@angular/router";
import {RespuestaService} from "../../redux/respuesta.service";
import {Respuesta} from "../model/respuesta";
import {HttpClient} from "@angular/common/http";
import {NetworkService} from "../servicios/network.service";


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
    console.log(this.dataService)
  }

  logOut() {
    this.dataService.usuarioLoggeado = undefined;
    this.networkService.sendRequest("Usuario", this.dataService.usuarioLoggeado).subscribe(value => {
      this.respuesta = value;
    }).unsubscribe();
    if(this.respuesta.Status == "OK"){
      window.location.reload();
    }else{
      this.router.navigate(['/error']);
    }
  }
}
