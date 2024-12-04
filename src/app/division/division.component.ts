import { Component } from '@angular/core';

@Component({
  selector: 'app-division',
  standalone: false,
  
  templateUrl: './division.component.html',
  styleUrl: './division.component.css'
})
export class DivisionComponent {
  result:number = 0;
  num1:number = 0;
  num2:number = 1;
  performDivision() {
    this.result = this.num1 / this.num2;
  }
}
