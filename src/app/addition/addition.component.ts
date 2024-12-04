import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  standalone: false,
  
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent {
  result:number = 0;
  performAddition(inputBox1:HTMLInputElement, inputBox2:HTMLInputElement) {
    let num1 = +inputBox1.value;
    let num2 = +inputBox2.value;
    this.result = num1 + num2;
  }
}
