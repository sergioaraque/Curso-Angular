import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  // Array de libros
  libros: Array<string>;
  // También sirve libros: Array<any>

  constructor() { 
    this.libros = ["El nombre del viento", "Harry Potter 1", "La celestina"];
  }

  ngOnInit(): void {
  }

}
