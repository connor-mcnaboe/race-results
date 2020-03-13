import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ConfigureTeamComponent } from '../configure-team/configure-team.component';

@Component({
  selector: 'app-add-team-popover',
  templateUrl: './add-team-popover.component.html',
  styleUrls: ['./add-team-popover.component.scss'],
})
export class AddTeamPopoverComponent {
  isPopoverEnabled: boolean;

  constructor(public popoverController: PopoverController) {}

   showAddTeamPopover(event: any) {
    this.popoverController.create({
      component: ConfigureTeamComponent,
      event: event,
      translucent: true,
      showBackdrop: false
    }).then((popoverElement: HTMLIonPopoverElement)=>{
      popoverElement.present();
    });
  }
}
