import {Component, OnDestroy, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DataService} from "../shared/servicios/data.service";
import {NetworkService} from "../shared/servicios/network.service";
import {Entrada} from "../shared/model/entrada";

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit,OnDestroy {
  controlMyAccount: FormGroup;

  constructor(private dataService: DataService,
              private _networkService: NetworkService,
              private router: Router) { }

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
    }else{
      this.router.navigate(['/error']);
    }
  }

  ngOnDestroy() {}

  OnSubmit() {
    let entrada = new Entrada();
    console.log(this.controlMyAccount.get('nombre').value)
    if(this.controlMyAccount.get('nombre').value !== ""){entrada.Nombre= this.controlMyAccount.get('nombre').value;}
    if(this.controlMyAccount.get('apellido1').value !== ""){entrada.Apellido1 = this.controlMyAccount.get('apellido1').value};
    if(this.controlMyAccount.get('apellido2').value !== ""){entrada.Apellido2 = this.controlMyAccount.get('apellido2').value};
    if(this.controlMyAccount.get('password').value !== ""){entrada.Password = this.controlMyAccount.get('password').value};
    if(this.controlMyAccount.get('telefono').value !== ""){entrada.Telefono = this.controlMyAccount.get('telefono').value};
    if(this.controlMyAccount.get('nombreUser').value !== ""){entrada.NombreUser = this.controlMyAccount.get('nombreUser').value};
    this._networkService.sendRequest("Configuracion",entrada).subscribe(respuesta =>{
      if(respuesta.Status === "OK"){
        this.dataService.usuarioLoggeado = respuesta.usuario;
      }else{

      }
    });
  }
}
