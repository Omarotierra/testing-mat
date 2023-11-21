import { TestBed } from '@angular/core/testing';

import { A2Component } from './a2.component';
import { HttpClientModule } from '@angular/common/http';
import { LinearRegressionService } from '../services/linear-regression.service';
import { of } from 'rxjs';
describe('A2Component', () => {
  let component: A2Component;
  let service: LinearRegressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [A2Component],
      providers: [LinearRegressionService],
      imports: [HttpClientModule],
    });
    component = TestBed.createComponent(A2Component).componentInstance;
    service = TestBed.inject(LinearRegressionService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //Regresion Lineal
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
  
//Correlacion
  // Helper function to set test data
  function setTestData(testData: any) {
    spyOn(service, 'getTest1').and.returnValue(of(testData));
    component.fetchDataForRoute(1);
  }

  // Pruebas del test1
  it('should calculate R with test1 json R = 0.9545', () => {
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };

    setTestData(testData);
    const result = component.calculateR();
    expect(result).toBeCloseTo(0.9545, 4);
  });

  it('should calculate RR with test1 json RR = 0.9111', () => {
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };

    setTestData(testData);
    const result = component.calculateRR();
    expect(result).toBeCloseTo(0.9111, 4);
  });

  // Pruebas del test2
  it('should calculate R with test2 json R = 0.9333', () => {
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };

    spyOn(service, 'getTest2').and.returnValue(of(testData));
    component.fetchDataForRoute(2);
    const result = component.calculateR();
    expect(result).toBeCloseTo(0.9333, 4);
  });

  it('should calculate RR with test2 json RR = 0.8711', () => {
    const testData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };

    spyOn(service, 'getTest2').and.returnValue(of(testData));
    component.updateData(2);
    const result = component.calculateRR();
    expect(result).toBeCloseTo(0.8711, 4);
  });

  // Pruebas del test3
  it('should calculate R with test3 json R = 0.9631', () => {
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };

    spyOn(service, 'getTest3').and.returnValue(of(testData));
    component.fetchDataForRoute(3);
    const result = component.calculateR();
    expect(result).toBeCloseTo(0.9631, 4);
  });

  it('should calculate RR with test3 json RR = 0.9276', () => {
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };

    spyOn(service, 'getTest3').and.returnValue(of(testData));
    component.updateData(3);
    const result = component.calculateRR();
    expect(result).toBeCloseTo(0.9276, 4);
  });

  // Pruebas del test4
  it('should calculate R with test4 json R = 0.948', () => {
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };

    spyOn(service, 'getTest4').and.returnValue(of(testData));
    component.fetchDataForRoute(4);
    const result = component.calculateR();
    expect(result).toBeCloseTo(0.9480, 4);
  });

  it('should calculate RR with test4 json RR = 0.8988 ', () => {
    const testData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };

    spyOn(service, 'getTest4').and.returnValue(of(testData));
    component.updateData(4);
    const result = component.calculateRR();
    expect(result).toBeCloseTo(0.8988, 4);
  });
  
  it('should handle invalid route number', () => {
    spyOn(console, 'error'); // Spy on console.error to check if it's called
    component.fetchDataForRoute(5);
    expect(console.error).toHaveBeenCalledWith('Número de ruta no válido');
    // Add more assertions if needed
  });



  it('should add number to data1', () => {
    component.newNumber1 = 1;
    component.addNumber1();
    expect(component.data1.length).toBe(1);
    expect(component.data1[0]).toBe(1);
  });
  
  it('should add number to data2', () => {
    component.newNumber2 = 5;
    component.addNumber2();
    expect(component.data2.length).toBe(1);
    expect(component.data2[0]).toBe(5);
  });
  
});
