import { Component } from '@angular/core';

@Component({
  selector: 'app-arth',
  templateUrl: './arth.component.html',
  styleUrls: ['./arth.component.css']
})
export class ArthComponent {

  num1: number;
  num2: number;

  constructor() {
    this.num1 = 0;
    this.num2 = 0;
  }

}
