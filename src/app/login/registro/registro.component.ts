import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {NetworkService} from "../../shared/servicios/network.service";
import {Entrada} from "../../shared/model/entrada";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistroComponent implements OnInit, OnDestroy {
  public submitted: boolean;
  controlRegistro: FormGroup;
  private subscriptions: Subscription = new Subscription();

  constructor(private netWorkService: NetworkService,
              private router: Router) {
  }

  ngOnInit() {
    this.controlRegistro = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(45), Validators.minLength(3)]),
      apellido1: new FormControl('', [Validators.maxLength(45), Validators.minLength(3)]),
      apellido2: new FormControl('', [Validators.maxLength(45), Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(75)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      telefono: new FormControl('', [Validators.minLength(9), Validators.maxLength(30)]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required])
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  Onsubmit() {
    let entrada = new Entrada();
    this.submitted = true;
    if (this.controlRegistro.valid) {
      if (this.controlRegistro.get('nombre').value !== "") {entrada.Nombre = this.controlRegistro.get('nombre').value};
      if (this.controlRegistro.get('apellido1').value !== "") {entrada.Apellido1 = this.controlRegistro.get('apellido1').value};
      if (this.controlRegistro.get('apellido2').value !== "") {entrada.Apellido2 = this.controlRegistro.get('apellido2').value};
      if (this.controlRegistro.get('password').value !== "") {entrada.Password = this.controlRegistro.get('password').value};
      if (this.controlRegistro.get('telefono').value !== "") {entrada.Telefono = this.controlRegistro.get('telefono').value};
      if (this.controlRegistro.get('fechaNacimiento').value !== "") {entrada.FechaNacimiento = this.controlRegistro.get('fechaNacimiento').value};
      if (this.controlRegistro.get('email').value !== "") {entrada.Email = this.controlRegistro.get('email').value};
      if (this.controlRegistro.get('genero').value !== "") {entrada.Genero = this.controlRegistro.get('genero').value};
        this.netWorkService.sendRequest("Registro", entrada).subscribe(respuesta => {
          if (respuesta.Status === "OK") {
            //Modal
            this.router.navigate(['/login']);
          } else {

          }
        })
      }
  }
}
