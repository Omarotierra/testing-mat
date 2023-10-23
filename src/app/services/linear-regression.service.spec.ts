import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { LinearRegressionService } from './linear-regression.service';

describe('LinearRegressionService', () => {
  let service: LinearRegressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

    });
    
    service = TestBed.inject(LinearRegressionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
