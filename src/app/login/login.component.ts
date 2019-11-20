import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../shared/servicios/data.service';
import {Store} from "@ngrx/store";
import {State} from "../redux/respuesta.reducer";
import * as RespuestaActions from "../redux/respuesta.actions";
import {Router} from "@angular/router";
import {Entrada} from "../shared/model/entrada";
import {Observable} from "rxjs";
import {Respuesta} from "../shared/model/respuesta";
import {RespuestaService} from "../redux/respuesta.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent implements OnInit{
  public submitted: boolean;
  controlLogin: FormGroup;
  respuesta: Observable<Respuesta>;

  constructor(private dataService: DataService,
              private store: Store<State>,
              private respuestaService: RespuestaService,
              private router: Router) { }

  ngOnInit() {
    this.controlLogin = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required])
    })
  }

  OnSubmit() {
    this.submitted = true;
    if(this.controlLogin.valid) {
      let entrada = new Entrada();
      entrada.Email = this.controlLogin.get('email').value;
      entrada.Password = this.controlLogin.get('password').value;
      this.dataService.entrada = entrada;
      this.store.dispatch(RespuestaActions.loginRespuesta());

      this.respuesta = this.respuestaService.login();

      this.respuesta.subscribe((respuesta: Respuesta) => {
        if (respuesta.Status === "KO") {
          alert(respuesta.StatusMsg);
        } else {
          this.dataService.usuarioLoggeado = respuesta.usuario;
          console.log("entrad")
          /*this.router.navigate(['/inicio']);*/
        }
      }).unsubscribe();
    }
  }
}
