import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  isDisabled: boolean;
  public mostramodal: boolean;
  constructor() { }

  ngOnInit(): void {
    this.isDisabled = false;
    this.mostramodal = false;
  }

  mostrarModal() {
    this.mostramodal = true;
  }

}
