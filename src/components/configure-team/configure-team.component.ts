import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-configure-team',
  templateUrl: './configure-team.component.html',
  styleUrls: ['./configure-team.component.scss'],
})
export class ConfigureTeamComponent implements OnInit {

  teamForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.teamForm = this.formBuilder.group({
      teamName: ['', [Validators.required]],
      racerOneTime: ['', [Validators.required, Validators.pattern('[0-9][0-9]+:[0-9][0-9]+\.[0-9][0-9][0-9]')]],
      racerTwoTime: ['', [Validators.required, Validators.pattern('[0-9][0-9]+:[0-9][0-9]+\.[0-9]{3,3}')]],
      racerThreeTime: ['', [Validators.required, Validators.pattern('[0-9][0-9]+:[0-9][0-9]+\.[0-9]{3,3}')]]
    })
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.teamForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.teamForm.value)
    }
  }

}
