import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TeamDataShareService } from "src/services/team-data-share.service";
import { Team } from "src/model/team";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-configure-team",
  templateUrl: "./configure-team.component.html",
  styleUrls: ["./configure-team.component.scss"],
})
export class ConfigureTeamComponent implements OnInit {
  teamForm: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    public teamDataShare: TeamDataShareService
  ) {}

  ngOnInit() {
    this.teamForm = this.formBuilder.group({
      teamName: ["", [Validators.required]],
      racerOneTime: [
        "",
        [
          Validators.required,
          Validators.pattern("[0-9][0-9]+:[0-9][0-9]+.[0-9]{3,3}"),
        ],
      ],
      racerTwoTime: [
        "",
        [
          Validators.required,
          Validators.pattern("[0-9][0-9]+:[0-9][0-9]+.[0-9]{3,3}"),
        ],
      ],
      racerThreeTime: [
        "",
        [
          Validators.required,
          Validators.pattern("[0-9][0-9]+:[0-9][0-9]+.[0-9]{3,3}"),
        ],
      ],
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.teamForm.valid) {
      this.presentWarningToast();
      return false;
    } else {
      const addedTeam: Team = {
        teamName: this.teamForm.value.teamName,
        racerOneTime: this.convertTimeStringToMilli(
          this.teamForm.value.racerOneTime
        ),
        racerTwoTime: this.convertTimeStringToMilli(
          this.teamForm.value.racerTwoTime
        ),
        racerThreeTime: this.convertTimeStringToMilli(
          this.teamForm.value.racerThreeTime
        ),
      };
      this.teamDataShare.addTeam(addedTeam);
      this.teamForm.reset();
    }
  }

  convertTimeStringToMilli(timeString: string): number {
    const timesAsStringList = timeString.split(":");
    const minutes = +timesAsStringList[0];
    const seconds = +timesAsStringList[1].split(".")[0];
    const milliSeconds = +timesAsStringList[1].split(".")[1];
    return minutes * 60 * 1000 + seconds * 1000 + milliSeconds;
  }

  async presentWarningToast() {
    const toast = await this.toastController.create({
      message:
        "Please provide all the required values & use the 00:00.000 format.",
      position: "top",
      duration: 3000,
      color: "danger",
    });
    toast.present();
  }
}
