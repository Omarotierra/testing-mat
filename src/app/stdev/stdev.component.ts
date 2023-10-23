import { Component, OnInit } from '@angular/core';
import { SizeService } from '../services/size.service';
import { HoursService } from '../services/hours.service';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-stdev',
  templateUrl: './stdev.component.html',
  styleUrls: ['./stdev.component.css']
})

export class StdevComponent implements OnInit{
  constructor(private sizeService: SizeService, private hoursService: HoursService) {}

  sizes: number[] = [];
  hours: number[] = [];
  mean1: number = 0;
  mean2: number = 0;

  ngOnInit(): void {
   
      this.sizeService.getSize().subscribe((data)=>{
        console.log(data);
        alert(data);

        this.sizes = data.data;
        this.mean1 = this.calculateStandardDeviation(this.sizes);
    })

    this.hoursService.getHours().subscribe((data)=>{
        console.log(data);
        alert(data);
        this.hours = data.data;
        this.mean2 = this.calculateStandardDeviation(this.hours);
    });
  }

  calculateStandardDeviation(data: number[]): number {
    if (!data || data.length === 0) {
      return 0;
    }
  
    const num = data.length;
    const media = MediaComponent.prototype.calculateMean(data);
  
    const sumDifferences = data.reduce((acc, value) => {
      const difference = value - media;
      return acc + difference * difference;
    }, 0);
  
    const stddev = Math.sqrt(sumDifferences / (num - 1));
    return Number(stddev.toFixed(2));
  }
  
}

