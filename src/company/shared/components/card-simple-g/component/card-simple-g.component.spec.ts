import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSimpleGComponent } from '../card-simple-g.component';

describe('CardSimpleGComponent', () => {
  let component: CardSimpleGComponent;
  let fixture: ComponentFixture<CardSimpleGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSimpleGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSimpleGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
