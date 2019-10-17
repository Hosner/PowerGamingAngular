import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../shared/servicios/data.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NetworkService} from "../../shared/servicios/network.service";
import {Entrada} from "../../shared/model/entrada";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit,OnDestroy {
  contactoForm: FormGroup;
  private subscriptions: Subscription = new Subscription();
  constructor(private _dataService: DataService,
              private _networkService: NetworkService) { }

  ngOnInit() {
    this.contactoForm = new FormGroup({
      email: new FormControl('',[Validators.email, Validators.required]),
      mensage: new FormControl()
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  OnSubmit() {
    let entrada = new Entrada();
    entrada.Email = this.contactoForm.get('email').value;
    entrada.Mensage = this.contactoForm.get('mensage').value
    this.subscriptions.add(this._networkService.sendRequest("Password",entrada, "Mensage").subscribe(respuesta =>{
      if(respuesta.Status === "OK"){

      }else{

      }
    }));
  }
}
