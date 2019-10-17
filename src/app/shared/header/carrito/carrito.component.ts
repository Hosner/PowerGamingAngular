import {Component, OnInit} from '@angular/core';
import {DataService} from "../../servicios/data.service";
import {CarritoService} from "../../servicios/carrito.service";
import {Carrito} from "../../model/carrito";
import {LineaCarrito} from "../../model/lineacarrito";
import {Edicion} from "../../model/edicion";


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: Carrito;
  lineaCarrito: LineaCarrito;
  constructor(private _dataService: DataService,
              private _carritoService: CarritoService) {

  }

  ngOnInit() {
    this.carrito = this._carritoService.carrito;
  }

 /* ver(n: number) {
    this.renderer.addClass(document.getElementById("meumenudes"+n),".block");
  }

  ocultar(n: number) {
    this.renderer.addClass(document.getElementById("meumenudes"+n),".none");
  }*/

  deleteCarrito(id: number){

  }

  duplicado(edicion: Edicion){

  }

  addCarrito(edicion: Edicion) {

  }

  calcularTotal(carrito: Carrito){

  }
}
