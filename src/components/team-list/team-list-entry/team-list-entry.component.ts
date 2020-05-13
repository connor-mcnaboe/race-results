import { Component, OnInit, Input } from "@angular/core";
import { Team } from "src/model/team";

@Component({
  selector: "app-team-list-entry",
  templateUrl: "./team-list-entry.component.html",
  styleUrls: ["./team-list-entry.component.scss"]
})
export class TeamListEntryComponent implements OnInit {
  @Input() team: Team;
  @Input() rank: number;

  constructor() {}

  ngOnInit() {}
}
