import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit {

  // Creamos el modelo
  shopModel: Shop = new Shop();

  // Listado de elementos que se han comprado
  boughtItems: Array<Product>;

  constructor() {
    // Iniciamos el array aquí porque en sólo este caso, lo queremos nada más empezar.
    this.boughtItems = [];
  }

  ngOnInit(): void {
  }

  // Añadimos el curso al array de productos comprados
  clickItem(_curso) {
    this.boughtItems.push(_curso);
  }

  cursoMatriculado(_event: Product) {
    this.clickItem(_event);
  }

  // Método para obtener el total del carrito
  obtenerPrecioCarrito() {
    if (this.boughtItems) {
      this.boughtItems.reduce((prev: number, item: Product) => prev + item.price, 0);
    }
  }

}
