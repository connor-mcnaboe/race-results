import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { TeamListComponent } from "./team-list.component";
import { TeamListEntryComponent } from "./team-list-entry/team-list-entry.component";
import { SharedModule } from 'src/pipe/shared.module';

describe("TeamListComponent", () => {
  let component: TeamListComponent;
  let fixture: ComponentFixture<TeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamListComponent, TeamListEntryComponent],
      imports: [IonicModule.forRoot(), SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
