import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DataService} from './shared/servicios/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent{

  languaje: string;

  constructor( private translateService: TranslateService,
               private dataService: DataService,) {
    this.languaje = navigator.language.charAt(0).concat(navigator.language.charAt(1));
    if(!this.languaje){
      translateService.setDefaultLang("es");
    }else {
      translateService.use(this.languaje);
      dataService.idiomaWeb = this.languaje;
    }
    this.dataService.usuarioLoggeado = JSON.parse(localStorage.getItem("IdSession"));
    if(this.dataService.usuarioLoggeado) {
      this.dataService.idLogin = this.dataService.usuarioLoggeado.idLogin;
    }
    console.log(localStorage.getItem("IdSession"))
  }

}
