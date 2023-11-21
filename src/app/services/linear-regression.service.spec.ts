import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LinearRegressionService } from './linear-regression.service';

describe('LinearRegressionService', () => {
  let service: LinearRegressionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LinearRegressionService]

    });
    
    service = TestBed.inject(LinearRegressionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should handle test1 HTTP request', () => {
    const mockData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };

    service.getTest1().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(service.test1);
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  });

  it('should handle test2 HTTP request', () => {
    const mockData = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2],
    };

    service.getTest2().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(service.test2);
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  });

  it('should handle test3 HTTP request', () => {
    const mockData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };

    service.getTest3().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(service.test3);
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  });

  it('should handle test4 HTTP request', () => {
    const mockData = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2],
    };

    service.getTest4().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(service.test4);
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  });
});
