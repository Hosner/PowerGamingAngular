import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DataService} from './shared/servicios/data.service';
import {NetworkService} from "./shared/servicios/network.service";
import {Entrada} from "./shared/model/entrada";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent{

  languaje: string;

  constructor( private translateService: TranslateService,
               private dataService: DataService,
               private networkService: NetworkService) {
    this.languaje = navigator.language.charAt(0).concat(navigator.language.charAt(1));
    if(!this.languaje){
      translateService.setDefaultLang("es");
    }else {
      translateService.use(this.languaje);
      dataService.idiomaWeb = this.languaje;
    }
    if(JSON.parse(localStorage.getItem("IdSession"))){
      this.dataService.usuarioLoggeado = JSON.parse(localStorage.getItem("IdSession"));
      this.networkService.sendRequestId().subscribe(value => {
        if(value.Status === "KO" && value.StatusMsg === "E6"){
          this.dataService.usuarioLoggeado == undefined;
        }
      });
    }
  }

}
