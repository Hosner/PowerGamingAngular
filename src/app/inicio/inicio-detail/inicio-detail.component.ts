import {Component, Input} from '@angular/core';
import {Respuesta} from "../../shared/model/respuesta";

@Component({
  selector: 'app-inicio-detail',
  templateUrl: './inicio-detail.component.html',
  styleUrls: ['./inicio-detail.component.css'],
})
export class InicioDetailComponent{
  @Input() respuesta: Respuesta;
  page = 1;
  constructor() {}
}
