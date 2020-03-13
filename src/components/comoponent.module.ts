import { NgModule } from "@angular/core";
import { AddTeamPopoverComponent } from "./add-team-popover/add-team-popover.component";
import { IonicModule } from "@ionic/angular";
import { ConfigureTeamComponent } from "./configure-team/configure-team.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AddTeamPopoverComponent, ConfigureTeamComponent],
  imports: [IonicModule, ReactiveFormsModule, FormsModule],
  exports: [AddTeamPopoverComponent, ConfigureTeamComponent],
  entryComponents: [ConfigureTeamComponent]
})
export class ComponentsModule {}
