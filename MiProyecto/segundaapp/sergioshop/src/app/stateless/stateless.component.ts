import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})
export class StatelessComponent implements OnInit {

  @Input () product: Product; 
  public matricula: string;
  private disabled: boolean;

  constructor() { }

  ngOnInit(): void {
    // Damos texto al botón
    this.matricula = 'Matricularse';
  }

  // Cuando se matriculan, se desativa el botón y se muestra que están matriculados
  matricularse() {
    this.disabled = true;
    this.matricula = 'Usted está matriculado';
  }

  // Devuelve si está deshabilitado
  isDisabled() {
    return this.disabled;
  }

}
