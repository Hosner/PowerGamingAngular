import { Component, OnInit } from '@angular/core';
import {DataService} from "../servicios/data.service";
import {NetworkService} from "../servicios/network.service";
import {Entrada} from "../model/entrada";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _dataService:DataService,
              private _networkService: NetworkService,
              private router: Router) { }

  ngOnInit() {
  }

  logOut() {
   /* let entrada = new Entrada();
    entrada.IdLogin = this._dataService.usuarioLoggeado.idLogin;
    this._networkService.sendRequest("Usuario",entrada,"Logout").subscribe(respuesta =>{
      if(respuesta.Status === "OK"){
        this._dataService.usuarioLoggeado = null;
        this.router.navigate(['/inicio']);
      }else{

      }
    }).unsubscribe();*/
  }


}
