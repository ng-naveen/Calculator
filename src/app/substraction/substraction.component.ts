import { Component } from '@angular/core';

@Component({
  selector: 'app-substraction',
  standalone: false,
  
  templateUrl: './substraction.component.html',
  styleUrl: './substraction.component.css'
})
export class SubstractionComponent {
  result = 0;
  performSubtraction(inputBox1:HTMLInputElement, inputBox2:HTMLInputElement) {
    let num1 = +inputBox1.value;
    let num2 = +inputBox2.value;
    this.result = num1 - num2;
  }
}
