import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { TeamListEntryComponent } from "./team-list-entry.component";

describe("TeamListEntryComponent", () => {
  let component: TeamListEntryComponent;
  let fixture: ComponentFixture<TeamListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamListEntryComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamListEntryComponent);
    component = fixture.componentInstance;
    component.team = {
      teamName: "test name",
      racerOneTime: 1,
      racerTwoTime: 2,
      racerThreeTime: 3,
    };
    component.rank = 1; 
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
