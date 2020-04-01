import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  // Array de libros
  libros: Array<object>;
  // También sirve libros: Array<any>

  constructor() { }

  ngOnInit(): void {
  }

}
