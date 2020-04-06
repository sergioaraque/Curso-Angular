import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})
export class StatelessComponent implements OnInit {

  @Input () product: Product; 

  constructor() { }

  ngOnInit(): void {
  }

}
