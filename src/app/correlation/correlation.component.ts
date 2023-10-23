import { Component } from '@angular/core';
import { LinearRegressionService } from '../services/linear-regression.service';
import { Calculate } from '../common/calculate';

@Component({
  selector: 'app-correlation',
  templateUrl: './correlation.component.html',
  styleUrls: ['./correlation.component.css'],
})
export class CorrelationComponent {
  constructor(private linearRegressionService: LinearRegressionService) {}

  data1: number[] = [];
  data2: number[] = [];
  selectedRouteNumber: number = 1;

  calculate = new Calculate();

  ngOnInit(): void {
    this.fetchDataForRoute(this.selectedRouteNumber);
  }

  fetchDataForRoute(routeNumber: number): void {
    switch (routeNumber) {
      case 1:
        this.linearRegressionService.getTest1().subscribe((data) => {
          this.setData(data.proxy_size, data.actual_added);
        });
        break;
      case 2:
        this.linearRegressionService.getTest2().subscribe((data) => {
          this.setData(data.proxy_size, data.actual_develop);
        });
        break;
      case 3:
        this.linearRegressionService.getTest3().subscribe((data) => {
          this.setData(data.plan_added, data.actual_added);
        });
        break;
      case 4:
        this.linearRegressionService.getTest4().subscribe((data) => {
          this.setData(data.plan_added, data.actual_develop);
        });
        break;
      default:
        console.error('Número de ruta no válido');
    }
  }

  setData(data1: number[], data2: number[]): void {
    this.data1 = data1;
    this.data2 = data2;
    this.handleDataResponse(data1, data2);
  }

  handleDataResponse(data1: number[], data2: number[]): void {
    console.log('Data received:', data1, data2);
  }

  updateData(routeNumber: number): void {
    this.fetchDataForRoute(routeNumber);
  }

  calculateR(): number {
    const r = this.calculate.calculateR(this.data1, this.data2);
    console.log('Coefficient of Correlation (R):', r);
    return r;
  }

  calculateRR(): number {
    const r = this.calculate.calculateR(this.data1, this.data2);
    const rr = this.calculate.calculateRR(r);
    console.log('Coefficient of Determination (R^2):', rr);
    return rr;
  }
}
