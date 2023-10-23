import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { StdevComponent } from './stdev.component';
import { SizeService } from '../services/size.service';
import { HoursService } from '../services/hours.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('StdevComponent', () => {
  let component: StdevComponent;
  let fixture: ComponentFixture<StdevComponent>;
  let sizeService: SizeService;
  let hoursService: HoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdevComponent],
      imports: [HttpClientTestingModule] ,
      providers: [SizeService, HoursService]
    });
    fixture = TestBed.createComponent(StdevComponent);
    component = fixture.componentInstance;
    sizeService = TestBed.inject(SizeService);
    hoursService = TestBed.inject(HoursService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return stdev = 572.03 with the proxy-size array', fakeAsync(() => {
    const mockData = { data: [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503] };
    
    spyOn(sizeService, 'getSize').and.returnValue(of(mockData));

    component.ngOnInit();
    
    tick();

    expect(component.sizes).toEqual(mockData.data);
    expect(component.calculateStandardDeviation(component.sizes)).toBeCloseTo(572.03);
  })); 

  it('should return stdev = 62.26 with the dev-hours array', fakeAsync(() => {
    const mockData = { data: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] };
    
    spyOn(hoursService, 'getHours').and.returnValue(of(mockData));

    component.ngOnInit();
    
    tick();

    expect(component.hours).toEqual(mockData.data);
    expect(component.calculateStandardDeviation(component.hours)).toBeCloseTo(62.26);
  })); 
});
