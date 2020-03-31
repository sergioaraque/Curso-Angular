import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  // Número aleatorio
  numrandom: number = Math.floor(Math.random() * 10); // Obtenemos un número aleatorio del 1 al 10.
  
  // Color
  miamarillo: string = 'yellow';
  
  // Color Aleatorio
  colorAleatorio: string;

  constructor() { }

  ngOnInit(): void {
  }

  // Función para obtener el color aleatorio, se hace la multiplicación de 256*256*256 para que nos de todos los valores y lo convertimos con el toString(16) para que nos lo de en formato hexadecimal
  obtenerColorAleatorio(): string {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  // Función que creamos para que le añada el '#' al color y así se pueda imprimir bien.
  color() {
    this.colorAleatorio = '#' + this.obtenerColorAleatorio();
    return this.colorAleatorio;
  }
}
