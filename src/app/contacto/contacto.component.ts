import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../shared/servicios/data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  contactoForm: FormGroup;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.contactoForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      mensage: new FormControl()
    });
  }

  OnSubmit() {

  }
}
