import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../shared/servicios/data.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NetworkService} from "../../shared/servicios/network.service";
import {Entrada} from "../../shared/model/entrada";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit,OnDestroy {
  controlMyAccount: FormGroup;
  private subscriptions: Subscription = new Subscription();
  constructor(private _dataService: DataService,
              private _networkService: NetworkService) { }

  ngOnInit() {
    this.controlMyAccount = new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.maxLength(45),Validators.minLength(3)]),
      apellido1: new FormControl('',[Validators.maxLength(45),Validators.minLength(3)]),
      apellido2: new FormControl('',[Validators.maxLength(45),Validators.minLength(3)]),
      password:new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      telefono: new FormControl('',[Validators.minLength(9),Validators.maxLength(30)]),
      nombreUser: new FormControl('',[Validators.required])
    })
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  OnSubmit() {
    let entrada = new Entrada();
    entrada.Nombre= this.controlMyAccount.get('nombre').value;
    entrada.Apellido1 = this.controlMyAccount.get('apellido1').value;
    entrada.Apellido2 = this.controlMyAccount.get('apellido2').value;
    entrada.Password = this.controlMyAccount.get('password').value;
    entrada.Telefono = this.controlMyAccount.get('telefono').value;
    entrada.NombreUser = this.controlMyAccount.get('nombreUser').value;
    this.subscriptions.add(this._networkService.sendRequest("Usuario",entrada,"Configuracion").subscribe(respuesta =>{
      if(respuesta.Status === "OK"){
        this._dataService.usuarioLoggeado = respuesta.usuario;
      }else{

      }
    }));
  }
}
