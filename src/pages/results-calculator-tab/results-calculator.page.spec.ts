import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultsCalculatorPage } from "./results-calculator.page";

describe('Tab1Page', () => {
  let component: ResultsCalculatorPage;
  let fixture: ComponentFixture<ResultsCalculatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsCalculatorPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsCalculatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
