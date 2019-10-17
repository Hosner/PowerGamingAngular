import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Entrada} from "../../../shared/model/entrada";
import {NetworkService} from "../../../shared/servicios/network.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit,OnDestroy {
  controlRegistro: FormGroup;
  private subscriptions: Subscription = new Subscription();
  constructor(private networkService: NetworkService) { }

  ngOnInit() {
    this.controlRegistro = new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.maxLength(45),Validators.minLength(3)]),
      apellido1: new FormControl('',[Validators.maxLength(45),Validators.minLength(3)]),
      apellido2: new FormControl('',[Validators.maxLength(45),Validators.minLength(3)]),
      email: new FormControl('',[Validators.required, Validators.email, Validators.minLength(8),Validators.maxLength(75)]),
      password:new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      telefono: new FormControl('',[Validators.minLength(9),Validators.maxLength(30)]),
      fechaNacimiento: new FormControl('',[Validators.required]),
      genero: new FormControl('',[Validators.required])
    })
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  Onsubmit() {
    let entrada = new Entrada();
    entrada.Nombre= this.controlRegistro.get('nombre').value;
    entrada.Apellido1 = this.controlRegistro.get('apellido1').value;
    entrada.Apellido2 = this.controlRegistro.get('apellido2').value;
    entrada.Email = this.controlRegistro.get('email').value;
    entrada.Password = this.controlRegistro.get('password').value;
    entrada.Telefono = this.controlRegistro.get('telefono').value;
    entrada.FechaNacimiento = this.controlRegistro.get('fechaNacimiento').value;
    entrada.Genero = this.controlRegistro.get('genero').value;
    this.subscriptions.add(this.networkService.sendRequest("Usuario",entrada,"Registro").subscribe(respuesta => {
      if(respuesta.Status === "OK"){

      }else{

      }
    }));
  }
}
