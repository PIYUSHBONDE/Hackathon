import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPredictionResultComponent } from './investment-prediction-result.component';

describe('InvestmentPredictionResultComponent', () => {
  let component: InvestmentPredictionResultComponent;
  let fixture: ComponentFixture<InvestmentPredictionResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentPredictionResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentPredictionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
