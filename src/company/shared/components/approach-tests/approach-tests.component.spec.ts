import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproachTestsComponent } from './approach-tests.component';

describe('ApproachTestsComponent', () => {
  let component: ApproachTestsComponent;
  let fixture: ComponentFixture<ApproachTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproachTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproachTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
