import { Component } from '@angular/core';
import { Calculate } from '../common/calculate';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component {
  calculator: Calculate = new Calculate();
  x0: number = 0;
  x1: number = 0;
  numSegmento: number = 0;
  error: number = 0.0001;
  dof: number = 0;
  tdist: number = 0;
  result: number = 0;

  simpson(x0: number, x1: number, num_segmento: number, error: number, f: (x: number) => number): number {
    this.result = this.calculator.simpson(x0, x1, num_segmento, error, f);
    return this.result;
  }
  
calculateInverse(x: number): number {
  return 1 / x;
}
calculateTriangulo(x: number): number {
  return x * x;
}
calculateCuadrado(x: number): number {
  return 2 * x;
}
getTWithDof(dof: number): (x: number) => number {
  return (x: number) => this.t(x, dof);
}

t(x: number, dof: number): number {
  return this.calculator.t(x, dof);
}
gamma(x: number): number {
  return this.calculator.gamma(x);
}


}
