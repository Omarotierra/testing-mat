import { Component } from '@angular/core';
import { Calculate } from '../common/calculate';
@Component({
  selector: 'app-t',
  templateUrl: './t.component.html',
  styleUrls: ['./t.component.css']
})
export class TComponent {
  calculator: Calculate = new Calculate();


  t(x: number, dof: number) : number{
    return this.calculator.t(x, dof);
  }

  gamma(x: number): number {
    return this.calculator.gamma(x);
  }
}
