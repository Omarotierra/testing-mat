import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TComponent } from './t.component';
import { SimpsonComponent } from '../simpson/simpson.component';

describe('TComponent', () => {
  let component: TComponent;
  let componentSimpson: SimpsonComponent;
  let fixture: ComponentFixture<TComponent>;
  let fixtureSimpson: ComponentFixture<SimpsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TComponent,SimpsonComponent]
    });
    fixture = TestBed.createComponent(TComponent);
    fixtureSimpson = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    componentSimpson = fixtureSimpson.componentInstance;
    fixture.detectChanges();
    fixtureSimpson.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should gamma=24 if x=5 (integer value)', () => {
    const x = 5;
    expect(component.gamma(x)).toBe(24);
  });

  it('Should gamma=11.63173 if x=9/2 (non-integer value)', () => {
    const x = 4.5;
    const expectedValue = 11.63173;
  
    const result = component.gamma(x);
    console.log(`Gamma(${x}) = ${result}`);
    expect(result).toBeCloseTo(expectedValue);
  });

  it('Should gamma=2.683437 if x=3.3 (non-integer value)', () => {
    const x =  3.3;
    const expectedValue = 2.683437;
  
    const result = component.gamma(x);
    console.log(`Gamma(${x}) = ${result}`);
    expect(result).toBeCloseTo(expectedValue);
  });

  it('Should return p=0.35006 if x0=0, x1=1.1, num_segmento=10, ERROR=0.00001, f(x)=1/x and dof=9', () => {
    const degreesOfFreedom = 9;
    const x = 1.1;
    const num_seg = 10;
    const E = 0.00001;
  
    const t = component.t(x, degreesOfFreedom);
    expect(componentSimpson.simpson(0, x, num_seg, E, (x) => component.t(x, degreesOfFreedom))).toBeCloseTo(0.35006, 5);
  });

  it('Should return p=0.36757 if x0=0, x1=1.1812, num_segmento=10, ERROR=0.00001, f(x)=1/x and dof=10', () => {
    const degreesOfFreedom = 10;
    const x = 1.1812;
    const num_seg = 10;
    const E = 0.00001;
  
    const t = component.t(x, degreesOfFreedom);
    expect(componentSimpson.simpson(0, x, num_seg, E, (x) => component.t(x, degreesOfFreedom))).toBeCloseTo(0.36757, 5);
  });

  it('Should return p=0.49500 if x0=0, x1=2.750, num_segmento=10, ERROR=0.00001, f(x)=1/x and dof=30', () => {
    const degreesOfFreedom = 30;
    const x = 2.750;
    const num_seg = 10;
    const E = 0.00001;
  
    const t = component.t(x, degreesOfFreedom);
    expect(componentSimpson.simpson(0, x, num_seg, E, (x) => component.t(x, degreesOfFreedom))).toBeCloseTo(0.49500, 5);
  });
  

  it('Should return p=0.35005864 with num_seg=20', () => {
    const degreesOfFreedom = 9;
    const x = 1.1;
    const num_seg = 20;
    const E = 0.00001;
    const expectedValue = 0.35005864;
  
    const integralResult = componentSimpson.simpson(0, x, num_seg, E, (x) => component.t(x, degreesOfFreedom));
  
    expect(integralResult).toBeCloseTo(expectedValue, 8); // Use 8 decimal places for comparison
  });

});
