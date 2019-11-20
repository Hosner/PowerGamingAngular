import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataService} from "../servicios/data.service";
import {Router} from "@angular/router";
import {RespuestaService} from "../../redux/respuesta.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(private dataService:DataService,
              private respuestaService: RespuestaService,
              private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.dataService.usuarioLoggeado = undefined;
    this.router.navigate(['/inicio']);
    }
}
