import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CorrelationComponent } from './correlation.component';
import { LinearRegressionService } from '../services/linear-regression.service';
import { of } from 'rxjs';

describe('CorrelationComponent', () => {
  let component: CorrelationComponent;
  let service: LinearRegressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrelationComponent],
      providers: [LinearRegressionService],
      imports: [HttpClientModule],
    });

    component = TestBed.createComponent(CorrelationComponent).componentInstance;
    service = TestBed.inject(LinearRegressionService);
  });

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
});
