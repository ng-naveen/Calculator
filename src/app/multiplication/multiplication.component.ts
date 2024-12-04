import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  standalone: false,
  
  templateUrl: './multiplication.component.html',
  styleUrl: './multiplication.component.css'
})
export class MultiplicationComponent {
  result:number = 0;
  num1:number = 0;
  num2:number = 0;
  performMultiplication() {
    this.result = this.num1 * this.num2
  }
}
