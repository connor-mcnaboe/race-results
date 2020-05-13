import { Component, OnInit, OnDestroy } from "@angular/core";
import { TeamDataShareService } from "src/services/team-data-share.service";
import { Subscription } from "rxjs";
import { Team } from "src/model/team";

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.component.html",
  styleUrls: ["./team-list.component.scss"],
})
export class TeamListComponent implements OnInit, OnDestroy {
  private tracker = new Subscription();
  teams: Team[];
  constructor(public teamDataShareService: TeamDataShareService) {}

  ngOnInit() {
    this.tracker.add(
      this.teamDataShareService.teamUpdate$.subscribe((teams: Team[]) => {
        this.teams = teams;
        this.rankTeams();
      })
    );
  }

  private rankTeams(): void {
    this.teams.sort((team1: Team, team2: Team) => {
      if (this.sumRacerTimes(team1) > this.sumRacerTimes(team2)) {
        return 1;
      }
      if (this.sumRacerTimes(team1) < this.sumRacerTimes(team2)) {
        return -1;
      }
      return 0;
    });
  }

  private sumRacerTimes(team: Team): number {
    return team.racerOneTime + team.racerTwoTime + team.racerThreeTime;
  }

  ngOnDestroy() {
    this.tracker.unsubscribe();
  }
}
