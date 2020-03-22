import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfigureTeamComponent } from './configure-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ConfigureTeamComponent', () => {
  let component: ConfigureTeamComponent;
  let fixture: ComponentFixture<ConfigureTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureTeamComponent ],
      imports: [FormsModule, ReactiveFormsModule, IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigureTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
