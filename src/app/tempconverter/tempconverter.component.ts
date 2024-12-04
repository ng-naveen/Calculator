import { Component } from '@angular/core';

@Component({
  selector: 'app-tempconverter',
  standalone: false,
  
  templateUrl: './tempconverter.component.html',
  styleUrl: './tempconverter.component.css'
})
export class TempconverterComponent {
  tempInC:number = 0;
  tempInF:number = 32;

  getTempInF() {
    this.tempInF = (this.tempInC * (9/5)) + 32;
  }

  getTempInC() {
    this.tempInC = (this.tempInF * (5/9)) - 32;
  }
}
