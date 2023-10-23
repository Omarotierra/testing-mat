import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { SizeService } from '../services/size.service';
import { HoursService } from '../services/hours.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';


describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let sizeService: SizeService;
  let hoursService: HoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent],
      imports: [HttpClientTestingModule] ,
      providers: [SizeService, HoursService]
    });
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    sizeService = TestBed.inject(SizeService);
    hoursService = TestBed.inject(HoursService);
    fixture.detectChanges();
  });

  it('should create component spec', () => {
    expect(component).toBeTruthy();
  });

 /* it('should calculate the mean of data set 1', () => {
    const mockData= { data: [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503] };
    expect(component.sizes).toEqual(mockData.data);
    expect(component.calculateMean(component.sizes)).toBe(550.6);
  });
  
  it('should calculate the mean of data set 2', () => {
    const mockData =  { data: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] };

    expect(component.hours).toEqual(mockData.data);
    expect(component.calculateMean(component.hours)).toBe(60.32);
  });*/
  
  it('should return mean = 550.6 with the proxy-size array', fakeAsync(() => {
    const mockData = { data: [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503] };
    
    spyOn(sizeService, 'getSize').and.returnValue(of(mockData));

    component.ngOnInit();
    
    tick();

    expect(component.sizes).toEqual(mockData.data);
    expect(component.calculateMean(component.sizes)).toEqual(550.6);
  })); 

  it('should return mean = 60.31 with the dev-hours array', fakeAsync(() => {
    const mockData = { data: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] };
    
    spyOn(hoursService, 'getHours').and.returnValue(of(mockData));

    component.ngOnInit();
    
    tick();

    expect(component.hours).toEqual(mockData.data);
    expect(component.calculateMean(component.hours)).toEqual(60.32);
  })); 
  
});