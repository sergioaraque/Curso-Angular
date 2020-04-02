import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: Array<object>;

  constructor() {
    this.libros = [
      {id: '1', titulo: 'El nombre del viento', autor: 'Patrick Rothfus'},
      {id: '2', titulo: 'Dime quién soy', autor: 'Julia Navarro'},
      {id: '3', titulo: 'El día que se perdió la cordura', autor: 'Javier Castillo'}
    ];
   }

  ngOnInit(): void {

  }

}
