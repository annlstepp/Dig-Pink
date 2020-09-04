import { Component, OnInit } from '@angular/core';
import { DigpinkDataService } from '../digpink-data.service';

console.log("tourn component ts display 1")

export class Tournament {
  _id:      string;
  time:     number;
  school:   string;
  opponent: string;
  gym:      string;
  home:     string;
}

console.log("tournament.component.ts display 1");

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']  
})

export class TournamentComponent implements OnInit {

  constructor(
    private digpinkDataServic: DigpinkDataService 
  ){}

  public tournaments: Tournament[];
  //publice message:  string;

  ngOnInit() {
  
    }
}

/*private getTournaments(position: any): void {
  this.message = 'Retrieving information';
  this.digpinkDataService
    .getTournaments()
    .then(foundTournaments => this.tournaments = foundTournaments);
  }*/

  /*private showError(error: any): void {
    this.message = error.message;
  };*/
 