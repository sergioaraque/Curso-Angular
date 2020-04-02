import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  // Variables
  libros: Array<object>;
  libroId: number;
  libroClick: any;

  constructor(private rutaUsuarios:ActivatedRoute) {
    this.libros = [
      {id: '1', titulo: 'El nombre del viento', autor: 'Patrick Rothfus'},
      {id: '2', titulo: 'Dime quién soy', autor: 'Julia Navarro'},
      {id: '3', titulo: 'El día que se perdió la cordura', autor: 'Javier Castillo'}
    ];
   }

  ngOnInit(): void {
    // Es un método asíncrono y se va a esperar a tener un resultado
    this.rutaUsuarios.params.subscribe(params =>{ // suscribe es un Observable
      this.libroId = params['libroId']; // Array asociativo
      this.libroClick = this.libroBuscador();
    });
  }

  // Método que filtra y devuelve el libro que tiene el id que le hemos mandado.
  filtroId(libro) {
    return libro.id == this;
  }

  // Método que buscará y devolverá el libro
  libroBuscador(): object {
    return this.libros.filter(this.filtroId, this.libroId) [0];
  }

}
