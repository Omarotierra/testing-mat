import { Component, OnInit } from '@angular/core';
import { LinearRegressionService } from '../services/linear-regression.service';
import { Calculate } from '../common/calculate';

@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.css']
})
export class LinearRegressionComponent implements OnInit {
  constructor(private linearRegressionService: LinearRegressionService) { }

  dataX: number[] = [];
  dataY: number[] = [];
  selectedRouteNumber: number = 1;

  sumX = 0;
  sumY = 0;
  mediaX = 0
  mediaY = 0;
  sumXY = 0;
  sumXX = 0;
  sumYY = 0;
  n = 0;

  calculate = new Calculate();

  ngOnInit(): void {
    this.fetchDataForRoute(this.selectedRouteNumber);
  }

  fetchDataForRoute(routeNumber: number): void {
    const fetchData = (dataX: number[], dataY: number[]) => {
      this.dataX = dataX;
      this.dataY = dataY;
      this.handleData();
    };

    switch (routeNumber) {
      case 1:
        this.linearRegressionService.getTest1().subscribe((data) => {
          fetchData(data.proxy_size, data.actual_added);
        });
        break;
      case 2:
        this.linearRegressionService.getTest2().subscribe((data) => {
          fetchData(data.proxy_size, data.actual_develop);
        });
        break;
      case 3:
        this.linearRegressionService.getTest3().subscribe((data) => {
          fetchData(data.plan_added, data.actual_added);
        });
        break;
      case 4:
        this.linearRegressionService.getTest4().subscribe((data) => {
          fetchData(data.plan_added, data.actual_develop);
        });
        break;
      default:
        console.error('Número de ruta no válido');
    }
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

  updateData(routeNumber: number): void {
    this.fetchDataForRoute(routeNumber);
  }

  calculateB1(): number {
    return this.calculate.calculateB1(this.sumXY, this.sumX, this.sumY, this.sumXX, this.n);
  }

  calculateB0(): number {
    return this.calculate.calculateB0(this.sumX, this.sumY, this.calculateB1(), this.n);
  }

  calculateY(x: number): number {
    return this.calculate.calculateY(this.calculateB0(), this.calculateB1(), x);
  }
}