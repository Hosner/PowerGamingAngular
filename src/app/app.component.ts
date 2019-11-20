import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NetworkService} from './shared/servicios/network.service';
import {DataService} from './shared/servicios/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent{

  languaje: string;

  constructor( private _translateService: TranslateService,
               private _dataService: DataService,
               private _networkService: NetworkService) {
    this.languaje = navigator.language.charAt(0).concat(navigator.language.charAt(1));
    if(!this.languaje){
      _translateService.setDefaultLang("es");
    }else {
      _translateService.use(this.languaje);
      _dataService.idiomaWeb = this.languaje;
    }
  }

}
