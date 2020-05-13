import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeamDataShareService } from 'src/services/team-data-share.service';

@Component({
  selector: 'app-clear-team-list',
  templateUrl: './clear-team-list.component.html',
  styleUrls: ['./clear-team-list.component.scss'],
})
export class ClearTeamListComponent {

  constructor(public teamDataShare: TeamDataShareService) {
  }

  clearTeams(): void { 
    this.teamDataShare.clearTeams();
  }

}
