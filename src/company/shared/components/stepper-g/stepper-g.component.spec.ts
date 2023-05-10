import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperGComponent } from './stepper-g.component';

describe('StepperGComponent', () => {
  let component: StepperGComponent;
  let fixture: ComponentFixture<StepperGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
