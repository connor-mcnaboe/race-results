import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { ResultsCalculatorPage } from "./results-calculator.page";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { ComponentsModule } from "src/components/comoponent.module";

describe("ResultsCalculatorPage", () => {
  let component: ResultsCalculatorPage;
  let fixture: ComponentFixture<ResultsCalculatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsCalculatorPage],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        IonicModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsCalculatorPage);
    component = fixture.componentInstance;
  }));

  it("should create", () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
