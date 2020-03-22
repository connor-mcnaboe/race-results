import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamDataShareService {
  
  // Subjects
  private teamUpdatedSubject = new Subject(); 
  
  constructor() { }
  
  // Observables
  teamUpdate$ = this.teamUpdatedSubject.asObservable();

  // Methods
  addTeam(team: Team): void {
    console.log(team)
    this.teamUpdatedSubject.next(team);
  }
}
