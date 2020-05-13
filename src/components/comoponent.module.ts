import { NgModule } from "@angular/core";
import { AddTeamPopoverComponent } from "./add-team-popover/add-team-popover.component";
import { IonicModule } from "@ionic/angular";
import { ConfigureTeamComponent } from "./configure-team/configure-team.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TeamDataShareService } from "src/services/team-data-share.service";
import { TeamListComponent } from "./team-list/team-list.component";
import { TeamListEntryComponent } from "./team-list/team-list-entry/team-list-entry.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { ClearTeamListComponent } from './clear-team-list/clear-team-list.component';

@NgModule({
  declarations: [
    AddTeamPopoverComponent,
    ConfigureTeamComponent,
    ClearTeamListComponent,
    TeamListComponent,
    TeamListEntryComponent
  ],
  imports: [IonicModule, ReactiveFormsModule, FormsModule, CommonModule],
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
