import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTeamPopoverComponent } from './add-team-popover.component';
import { ConfigureTeamComponent } from '../configure-team/configure-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AddTeamPopoverComponent', () => {
  let component: AddTeamPopoverComponent;
  let fixture: ComponentFixture<AddTeamPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeamPopoverComponent, ConfigureTeamComponent ],
      imports: [FormsModule, ReactiveFormsModule, IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTeamPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
