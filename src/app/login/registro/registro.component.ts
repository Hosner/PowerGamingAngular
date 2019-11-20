import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistroComponent implements OnInit, OnDestroy {
  controlRegistro: FormGroup;
  private subscriptions: Subscription = new Subscription();
  constructor() { }

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

  }
}
