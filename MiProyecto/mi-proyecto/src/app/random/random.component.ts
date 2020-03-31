import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  numrandom: number = Math.floor(Math.random() * 10); // Obtenemos un número aleatorio del 1 al 10.
  
  constructor() { }

  ngOnInit(): void {
  }

}
