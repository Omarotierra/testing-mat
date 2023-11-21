import { Component } from '@angular/core';
import { Calculate } from '../common/calculate';
import { LinearRegressionService } from '../services/linear-regression.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component {
  constructor(private linearRegressionService: LinearRegressionService) {}
  newNumber1: number= 0;
  newNumber2: number= 0;
  data1: number[] = [];
  data2: number[] = [];

  selectedRouteNumber: number = 1;
  
  r: number=0;
  rr: number=0;


  dataX: number[] = [];
  dataY: number[] = [];
  b0: number =0;
  b1: number =0;
  y: number =0;
  x: number=0;

  sumX = 0;
  sumY = 0;
  mediaX = 0
  mediaY = 0;
  sumXY = 0;
  sumXX = 0;
  sumYY = 0;
  n = 0;

  calculate = new Calculate();

  fetchDataForRoute(routeNumber: number): void {
    const fetchData = (dataX: number[], dataY: number[]) => {
      this.dataX = dataX;
      this.dataY = dataY;
      this.handleData();
    };
    switch (routeNumber) {
      case 1:
        this.linearRegressionService.getTest1().subscribe((data) => {
          this.setData(data.proxy_size, data.actual_added);
          fetchData(data.proxy_size, data.actual_added);
        });
        break;
      case 2:
        this.linearRegressionService.getTest2().subscribe((data) => {
          this.setData(data.proxy_size, data.actual_develop);
          fetchData(data.proxy_size, data.actual_develop);
        });
        break;
      case 3:
        this.linearRegressionService.getTest3().subscribe((data) => {
          this.setData(data.plan_added, data.actual_added);
          fetchData(data.plan_added, data.actual_added);
        });
        break;
      case 4:
        this.linearRegressionService.getTest4().subscribe((data) => {
          this.setData(data.plan_added, data.actual_develop);
          fetchData(data.plan_added, data.actual_develop);
        });
        break;
      default:
        console.error('Número de ruta no válido');
    }
  }

  setData(data1: number[], data2: number[]): void {
    this.data1 = data1;
    this.data2 = data2;
    this.dataX = data1;
    this.dataY = data2;
    this.handleDataResponse(data1, data2);
  }

  handleDataResponse(data1: number[], data2: number[]): void {
    console.log('Data received:', data1, data2);
  }

  updateData(routeNumber: number): void {
    this.fetchDataForRoute(routeNumber);
  }


  addNumber1(): void {
    if (this.newNumber1 !== undefined && !isNaN(this.newNumber1)) {
      this.data1.push(this.newNumber1);
      this.dataX.push(this.newNumber1);
      this.newNumber1 = 0;
    }
  }
  addNumber2(): void {
    if (this.newNumber2 !== undefined && !isNaN(this.newNumber2)) {
      this.data2.push(this.newNumber2);
      this.dataY.push(this.newNumber2);
      this.newNumber2 = 0;
    }
  }
  calculateR(): number {
    const r = this.calculate.calculateR(this.data1, this.data2);
    console.log('Coefficient of Correlation (R):', r);
    this.r =r;
    return r;
  }
  calculateRR(): number {
    const r = this.calculate.calculateR(this.data1, this.data2);
    const rr = this.calculate.calculateRR(r);
    console.log('Coefficient of Determination (R^2):', rr);
    this.rr=rr;
    return rr;
  }

  handleData(): void {
    this.sumX = this.calculate.sumX(this.dataX);
    this.sumY = this.calculate.sumX(this.dataY);
    this.mediaX = this.calculate.calculateMedia(this.dataX);
    this.mediaY = this.calculate.calculateMedia(this.dataY);

    this.sumXY = this.calculate.sumXY(this.dataX, this.dataY);
    this.sumXX = this.calculate.sumXX(this.dataX);
    this.sumYY = this.calculate.sumXX(this.dataY);
    this.n = this.dataX.length;
  }

  calculateB1(): number {
    this.b1=this.calculate.calculateB1(this.sumXY, this.sumX, this.sumY, this.sumXX, this.n);
    return this.b1;
  }

  calculateB0(): number {
    this.b0= this.calculate.calculateB0(this.sumX, this.sumY, this.calculateB1(), this.n);
    return this.b0;
  }

  calculateY(x: number): number {
    this.y = this.calculate.calculateY(this.calculateB0(), this.calculateB1(), x);
    return this.y;
  }
}
