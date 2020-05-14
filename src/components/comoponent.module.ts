import { NgModule } from "@angular/core";
import { AddTeamPopoverComponent } from "./add-team-popover/add-team-popover.component";
import { IonicModule } from "@ionic/angular";
import { ConfigureTeamComponent } from "./configure-team/configure-team.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TeamListComponent } from "./team-list/team-list.component";
import { TeamListEntryComponent } from "./team-list/team-list-entry/team-list-entry.component";
import { CommonModule } from '@angular/common';
import { ClearTeamListComponent } from './clear-team-list/clear-team-list.component';
import { SharedModule } from 'src/pipe/shared.module';

@NgModule({
  declarations: [
    AddTeamPopoverComponent,
    ConfigureTeamComponent,
    ClearTeamListComponent,
    TeamListComponent,
    TeamListEntryComponent
  ],
  imports: [IonicModule, ReactiveFormsModule, FormsModule, CommonModule, SharedModule],
  exports: [
    AddTeamPopoverComponent,
    ConfigureTeamComponent,
    ClearTeamListComponent,
    TeamListComponent,
    TeamListEntryComponent
    ],
  entryComponents: [ConfigureTeamComponent, AddTeamPopoverComponent],
  providers: []
})
export class ComponentsModule {}
