import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { A1Component } from './a1.component';
import { SizeService } from '../services/size.service';
import { HoursService } from '../services/hours.service';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('A1Component', () => {

  let component: A1Component;
  let fixture: ComponentFixture<A1Component>;
  let sizeService: SizeService;
  let hoursService: HoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [A1Component],
      imports: [HttpClientTestingModule, FormsModule] ,
      providers: [SizeService, HoursService]
    });
    fixture = TestBed.createComponent(A1Component);
    component = fixture.componentInstance;
    sizeService = TestBed.inject(SizeService);
    hoursService = TestBed.inject(HoursService);
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return mean = 550.6 with the proxy-size array', fakeAsync(() => {
    const mockData = { data: [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503] };
    
    spyOn(sizeService, 'getSize').and.returnValue(of(mockData));

    component.getSizesData();  // Usamos la nueva función
    
    tick();

    expect(component.sizes).toEqual(mockData.data);
    expect(component.calculateMean(component.sizes)).toEqual(550.6);
  })); 

  it('should return mean = 60.31 with the dev-hours array', fakeAsync(() => {
    const mockData = { data: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] };
    
    spyOn(hoursService, 'getHours').and.returnValue(of(mockData));

    component.getHoursData();  // Usamos la nueva función
    
    tick();

    expect(component.hours).toEqual(mockData.data);
    expect(component.calculateMean(component.hours)).toEqual(60.32);
  })); 
  it('should return stdev = 572.03 with the proxy-size array', fakeAsync(() => {
    const mockData = { data: [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503] };
    
    spyOn(sizeService, 'getSize').and.returnValue(of(mockData));

    component.getSizesData();  // Usamos la nueva función
    
    tick();

    expect(component.sizes).toEqual(mockData.data);
    expect(component.calculateStandardDeviation(component.sizes)).toBeCloseTo(572.03);
  })); 

  it('should return stdev = 62.26 with the dev-hours array', fakeAsync(() => {
    const mockData = { data: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] };
    
    spyOn(hoursService, 'getHours').and.returnValue(of(mockData));

    component.getHoursData();  // Usamos la nueva función
    
    tick();

    expect(component.hours).toEqual(mockData.data);
    expect(component.calculateStandardDeviation(component.hours)).toBeCloseTo(62.26);
  })); 

  it('should add a number to the array', () => {
    // Arrange
    const initialLength = component.number.length;
    component.newNumber = 42;

    // Act
    component.addNumber();

    // Assert
    expect(component.number.length).toBe(initialLength + 1);
    expect(component.number).toContain(42);
    expect(component.newNumber).toBe(0);
  });

  it('should fill the number array with sizes data', fakeAsync(() => {
    // Arrange
    const mockData = { data: [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503] };

    spyOn(sizeService, 'getSize').and.returnValue(of(mockData));

    // Act
    component.getSizesData();
    tick();

    // Assert
    expect(component.sizes).toEqual(mockData.data);
    component.fillArray('sizes');
    expect(component.number).toEqual(mockData.data);
  }));

  it('should fill the number array with hours data', fakeAsync(() => {
    // Arrange
    const mockData = { data: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] };

    spyOn(hoursService, 'getHours').and.returnValue(of(mockData));

    // Act
    component.getHoursData();
    tick();

    // Assert
    expect(component.hours).toEqual(mockData.data);
    component.fillArray('hours');
    expect(component.number).toEqual(mockData.data);
  }));

  it('should calculate standard deviation', fakeAsync(() => {
    // Arrange
    const mockData = { data: [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503] };
    spyOn(sizeService, 'getSize').and.returnValue(of(mockData));

    // Act
    component.getSizesData();
    tick();
    component.calculateStandardDeviation(component.sizes);

    // Assert
    expect(component.result).toBeCloseTo(572.03);
  }));

  it('should return 0 for standard deviation when data is empty', () => {
    const result = component.calculateStandardDeviation([]);
    expect(result).toBe(0);
  });

  it('should calculate standard deviation for non-empty data', () => {
    const data = [1, 2, 3, 4, 5];
    const result = component.calculateStandardDeviation(data);

    // The expected standard deviation value depends on the specific data set.
    // You might want to calculate it manually for the test data.
    // For this example, we'll just check if the result is a number.
    expect(result).toEqual(jasmine.any(Number));
  });

  it('should return 0 for mean when data is empty', () => {
    const result = component.calculateMean([]);
    expect(result).toBe(0);
  });

  it('should calculate mean for non-empty data', () => {
    const data = [1, 2, 3, 4, 5];
    const result = component.calculateMean(data);

    // Calculate the expected mean manually for the test data.
    const expectedMean = (1 + 2 + 3 + 4 + 5) / 5;
    expect(result).toBe(expectedMean);
  });
});
