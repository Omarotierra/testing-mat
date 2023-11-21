import { Component, OnInit } from '@angular/core';
import { SizeService } from '../services/size.service';
import { HoursService } from '../services/hours.service';


@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component {
  constructor(private sizeService: SizeService, private hoursService: HoursService) {}
  number: number[] = [];
  newNumber: number= 0;

  media: number=0;

  sizes: number[] = [];
  hours: number[] = [];
  mean1: number = 0;
  mean2: number = 0;

  result: number= 0;

  addNumber(): void {
    if (this.newNumber !== undefined && !isNaN(this.newNumber)) {
      this.number.push(this.newNumber);
      this.newNumber = 0;
    }
  }
  getSizesData(): void {
    this.sizeService.getSize().subscribe((data) => {
      this.sizes = data.data;
      this.number = this.sizes.slice();
    });
  }

  getHoursData(): void {
    this.hoursService.getHours().subscribe((data) => {
      this.hours = data.data;
      this.number = this.hours.slice();
    });
  }

  fillArray(type: string): void {
    if (type === 'hours') {
      this.getHoursData();
      this.number = this.hours.slice();
    } else if (type === 'sizes') {
      this.getSizesData();
      this.number = this.sizes.slice();
    }
  }
  calculateStandardDeviation(data: number[]): number {
    if (!data || data.length === 0) {
      return 0;
    }
  
    const num = data.length;
    const media = this.calculateMean(data);
  
    const sumDifferences = data.reduce((acc, value) => {
      const difference = value - media;
      return acc + difference * difference;
    }, 0);
  
    const stddev = Math.sqrt(sumDifferences / (num - 1));
    this.result = Number(stddev.toFixed(2));
    return Number(stddev.toFixed(2));
  }
  
  calculateMean(data: number[]): number {
    let media;
    if (data.length === 0) {
      return 0;
    }

    const sum = data.reduce((a, b) => a + b, 0);
    media = sum / data.length;
    media = Number(media.toFixed(2));
    this.media= media;
    return media;
  }
}
