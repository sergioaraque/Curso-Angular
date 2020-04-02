import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibroclickedService {

  libros: Array<object>; // Vamos a recoger los libros

  constructor() {
    this.libros = []; // Lo creamos vacío porque se irá rellenando cuando se haga click.
  }

  // Método para incluir el libro que haya visto el usuario
  libroVisto(libroVisto) {
    this.libros.push(libroVisto);
  }

  // Método para ver los libros que el usuario ha visto
  verListado() {
    // Si tenemos libros, los mostramos.
    if( this.libros.length > 0 ) {
      return this.libros;
    } else {
      return false;
    }
  }
}
