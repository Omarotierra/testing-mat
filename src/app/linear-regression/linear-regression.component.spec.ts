import { TestBed } from '@angular/core/testing';
import { LinearRegressionComponent } from './linear-regression.component';
import { LinearRegressionService } from '../services/linear-regression.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('CustomLinearRegressionComponent', () => {
  let component: LinearRegressionComponent;
  let service: LinearRegressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinearRegressionComponent],
      providers: [LinearRegressionService],
      imports: [HttpClientModule],
    });

    component = TestBed.createComponent(LinearRegressionComponent).componentInstance;
    service = TestBed.inject(LinearRegressionService);
  });

  it('should calculate B1 for test1.json B1 = 1.7279', () => {
    const test1Data = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };

    spyOn(service, 'getTest1').and.returnValue(of(test1Data));

    component.fetchDataForRoute(1);

    const result = component.calculateB1();

    expect(result).toBeCloseTo(1.7279, 4);
  });

  it('should calculate B0 for test1.json B0 = -22.5525', () => {
    const test1Data = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };

    spyOn(service, 'getTest1').and.returnValue(of(test1Data));

    component.fetchDataForRoute(1);

    const result = component.calculateB0();

    expect(result).toBeCloseTo(-22.5525, 4);
  });

  it('should calculate y for test1.json y = 644.429 if x = 386', () => {
    const test1Data = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };

    spyOn(service, 'getTest1').and.returnValue(of(test1Data));

    component.fetchDataForRoute(1);

    const result = component.calculateY(386);

    expect(result).toBeCloseTo(644.429, 3);
  });

  it('should calculate B1 for test2 JSON B1 = 0.1681', () => {
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };

    spyOn(service, 'getTest2').and.returnValue(of(testData));

    component.updateData(2);

    const result = component.calculateB1();

    expect(result).toBeCloseTo(0.1681, 4);
  });

  it('should calculate B0 for test2 JSON B0 = -4.039', () => {
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };

    spyOn(service, 'getTest2').and.returnValue(of(testData));

    component.updateData(2);

    const result = component.calculateB0();

    expect(result).toBeCloseTo(-4.039, 3);
  });

  it('should calculate y for test2 JSON y = 60.858 if x = 386', () => {
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };

    spyOn(service, 'getTest2').and.returnValue(of(testData));

    component.updateData(2);

    const result = component.calculateY(386);

    expect(result).toBeCloseTo(60.858, 3);
  });

  
  it('should calculate B1 for test3 JSON  B1 = 1.43097', () => {
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };
  
    spyOn(service, 'getTest3').and.returnValue(of(testData));
  
    component.updateData(3);
  
    const result = component.calculateB1();
  
    expect(result).toBeCloseTo(1.43097, 5);
  });
  
  it('should calculate B0 for test3 JSON B0 = -23.92', () => {
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };
  
    spyOn(service, 'getTest3').and.returnValue(of(testData));
  
    component.updateData(3);
  
    const result = component.calculateB0();
  
    expect(result).toBeCloseTo(-23.92, 2);
  });
  
  it('should calculate y for test3 JSON  y = 528.4294 if x = 386 ', () => {
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };
  
    spyOn(service, 'getTest3').and.returnValue(of(testData));
  
    component.updateData(3);
  
    const result = component.calculateY(386);
  
    expect(result).toBeCloseTo(528.4294, 4);
  });
  
  it('should calculate B1 for test4 JSON B1 = 0.140164', () => {
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };
  
    spyOn(service, 'getTest4').and.returnValue(of(testData));
  
    component.updateData(4);
  
    const result = component.calculateB1();
  
    expect(result).toBeCloseTo(0.140164, 6);
  });
  
  it('should calculate B0 for test4 JSON B0 = -4.604', () => {
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };
  
    spyOn(service, 'getTest4').and.returnValue(of(testData));
  
    component.updateData(4);
  
    const result = component.calculateB0();
  
    expect(result).toBeCloseTo(-4.604, 3);
  });
  
  it('should calculate y for test4 JSON y = 49.4994 if x = 386', () => {
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };
  
    spyOn(service, 'getTest4').and.returnValue(of(testData));
  
    component.updateData(4);
  
    const result = component.calculateY(386);
  
    expect(result).toBeCloseTo(49.4994, 4);
  });
  
 
});
