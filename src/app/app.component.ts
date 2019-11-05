import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {NetworkService} from './shared/servicios/network.service';
import {DataService} from './shared/servicios/data.service';
import {Entrada} from './shared/model/entrada';
import {Juego} from "./shared/model/juego";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor( private _translateService: TranslateService,
               private _dataService: DataService,
               private _networkService: NetworkService) {
    _translateService.setDefaultLang("es");
    _translateService.use("es");
    _dataService.idiomaWeb = "es";


  }

  ngOnInit(): void {
  }
}
