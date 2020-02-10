import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../shared/servicios/data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit, OnDestroy{
  contactoForm: FormGroup;
  private subscriptions: Subscription = new Subscription();

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.contactoForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      mensage: new FormControl()
    });
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

  OnSubmit() {

  }

}
