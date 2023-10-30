import { Component } from '@angular/core';
import { Calculate } from '../common/calculate';
@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {
  calculator: Calculate = new Calculate();

  simpson(x0: number, x1: number, num_segmento: number, error: number, f: (x: number) => number): number {
    return this.calculator.simpson(x0, x1, num_segmento, error, f);
  }
}
