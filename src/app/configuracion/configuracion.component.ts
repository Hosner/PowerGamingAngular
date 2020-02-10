import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DataService} from "../shared/servicios/data.service";
import {NetworkService} from "../shared/servicios/network.service";
import {Entrada} from "../shared/model/entrada";
import {Subscription} from "rxjs";
import {ModalService} from "../shared/servicios/modal.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfiguracionComponent implements OnInit, OnDestroy {
  controlMyAccount: FormGroup;

  private subscriptions: Subscription = new Subscription();

  constructor(private dataService: DataService,
              private _networkService: NetworkService,
              private router: Router,
              private modalService: ModalService,
              private translateService: TranslateService) {
  }

  ngOnInit() {
    if (this.dataService.usuarioLoggeado) {
      this.controlMyAccount = new FormGroup({
        nombre: new FormControl('', [Validators.required, Validators.maxLength(45), Validators.minLength(3)]),
        apellido1: new FormControl('', [Validators.maxLength(45), Validators.minLength(3)]),
        apellido2: new FormControl('', [Validators.maxLength(45), Validators.minLength(3)]),
        password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
        telefono: new FormControl('', [Validators.minLength(9), Validators.maxLength(30)]),
        nombreUser: new FormControl('', [Validators.required])
      })
    } else {
      this.router.navigate(['/error']);
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  OnSubmit() {
    if (false) {
      let entrada = new Entrada();
      if (this.controlMyAccount.get('nombre').value !== "") {
        entrada.Nombre = this.controlMyAccount.get('nombre').value;
      }
      if (this.controlMyAccount.get('apellido1').value !== "") {
        entrada.Apellido1 = this.controlMyAccount.get('apellido1').value
      }

      if (this.controlMyAccount.get('apellido2').value !== "") {
        entrada.Apellido2 = this.controlMyAccount.get('apellido2').value
      }

      if (this.controlMyAccount.get('password').value !== "") {
        entrada.Password = this.controlMyAccount.get('password').value
      }

      if (this.controlMyAccount.get('telefono').value !== "") {
        entrada.Telefono = this.controlMyAccount.get('telefono').value
      }
      if (this.controlMyAccount.get('nombreUser').value !== "") {
        entrada.NombreUser = this.controlMyAccount.get('nombreUser').value
      }

      this.subscriptions.add(this._networkService.sendRequest("Configuracion", entrada).subscribe(respuesta => {
        if (respuesta.Status === "OK") {
          localStorage.setItem("IdSession", JSON.stringify(respuesta.usuario));
          console.log(localStorage.getItem("IdSession"));
          this.dataService.usuarioLoggeado = respuesta.usuario;
        } else {
          this.dataService.menssageModal = this.translateService.instant(respuesta.StatusMsg);
        }
      }));
    } else {
      console.log("HOLIII");
    }
  }
}
