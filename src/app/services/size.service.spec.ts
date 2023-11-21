import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SizeService } from './size.service';

describe('SizeService', () => {
  let service: SizeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SizeService]
    });

    // Inject the service (which imports the HttpClient) and the Test Controller
    service = TestBed.inject(SizeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data when calling getSize', () => {
    const mockData = { data: [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503] };

    service.getSize().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(service.apiURL);
    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  });

});
