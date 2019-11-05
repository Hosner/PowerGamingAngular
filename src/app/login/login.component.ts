import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NetworkService} from "../shared/servicios/network.service";
import {DataService} from "../shared/servicios/data.service";
import {Entrada} from "../shared/model/entrada";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit,OnDestroy {
  controlLogin: FormGroup;
  private subscriptions: Subscription = new Subscription();
  constructor( private _networkService: NetworkService,
               private _dataService: DataService) { }

  ngOnInit() {
    this.controlLogin = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required])
    })
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  logIn() {
    /*let entrada = new Entrada();
    entrada.Email = this.controlLogin.get('email').value;
    entrada.Password = this.controlLogin.get('password').value;
    this.subscriptions.add(this._networkService.sendRequest("Usuario", entrada,"Login").subscribe(respuesta => {
       if(respuesta.Status === "OK"){
         this._dataService.usuarioLoggeado = respuesta.usuario;
       }else{

       }
    }));*/
  }
}
