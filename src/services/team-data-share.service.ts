import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamDataShareService {
  teams: Team[] = [];
  private teamUpdatedSubject = new Subject(); 
  
  constructor() { }
  
  teamUpdate$ = this.teamUpdatedSubject.asObservable();

  addTeam(team: Team): void {
    this.teams.push(team)
    this.teamUpdatedSubject.next(this.teams);
  }

  clearTeams(): void { 
    this.teams = [];
    this.teamUpdatedSubject.next(this.teams);
  }
}
