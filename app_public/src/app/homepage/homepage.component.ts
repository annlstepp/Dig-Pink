import { Component, OnInit } from '@angular/core';
//import { Participant } from '../participant/participant.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public pageContent = {
    header: {
      title: 'North Kansas City School District Dig Pink Tournament',
      
    },
      //strapline:  'NKC School District Side Out Foundation fund raiser',
      //sidebar:  ''
      //content: 'Dig Pink is an annual fundraising event sponsored by the NKC School District volleyball teams'
    }
};