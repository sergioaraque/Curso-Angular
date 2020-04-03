import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-rendererdemo',
  templateUrl: './rendererdemo.component.html',
  styleUrls: ['./rendererdemo.component.css']
})
export class RendererdemoComponent implements OnInit {

  users: Array<object>; // Vamos a manejar una lista de usuarios
  clearElement:HTMLElement;

  constructor(private ren: Renderer2) {
    this.users =  [
      {nombre: 'Sergio', id: 1},
      {nombre: 'Jaime', id: 2},
      {nombre: 'Luis', id: 3}
    ];
  }

  ngOnInit(): void {
  }

  activeMethod(element: HTMLElement) {
    if (this.clearElement) { // Si existe, le vamos a remover la clase.
      this.ren.removeClass(this.clearElement, 'miClase');
    }
    this.ren.addClass(element, 'miClase'); // Añadimos una clase
    this.ren.setAttribute(element,'data-select', 'true');

    let nuevoElemento = this.ren.createElement("span"); // Le vamos a adjuntar una etiqueta span.
    this.ren.setProperty(nuevoElemento, "innerHTML", "(visto)"); // Creamos un elemento de html
    this.ren.appendChild(element, nuevoElemento); // Añadimos el elemento.
    this.clearElement = element; // Asignamos el último elemento.
  }
}
