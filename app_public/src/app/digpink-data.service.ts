import { Injectable }   from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Participant }  from './participant/participant.component';
import { Tournament }   from './tournament/tournament.component';
import { Memorial }     from './memorial/memorial.component';
import { Roster }     from './roster/roster.component';
import { environment }  from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class DigpinkDataService {
  constructor (private http: HttpClient) { }

  
 //private apiBaseUrl = 'http://localhost:3000/api';  //local
 //private apiBaseUrl = 'http://morning-cove-12019.herokuapp.com/api'; //prod
 private apiBaseUrl = environment.apiBaseUrl;  


 public getParticpants():  Promise<Participant[]> {
  const url: string = `${this.apiBaseUrl}/participant`;   
   return this.http
    .get(url)
    .toPromise ()
    .then(response => response as Participant[])
    .catch();
    //.catch(this.handleError);
  }

  public getMemorials():  Promise<Memorial[]> {
  const url: string = `${this.apiBaseUrl}/memorial`;   
   return this.http
    .get(url)
    .toPromise ()
    .then(response => response as Memorial[])
    .catch();
    //.catch(this.handleError);
  }

  public getRosters():  Promise<Roster[]> {
    const url: string = `${this.apiBaseUrl}/roster`;   
     return this.http
      .get(url)
      .toPromise ()
      .then(response => response as Roster[])
      .catch();
      //.catch(this.handleError);
    }
  
private handleError(error: any) : Promise<any> {
  console.error('Something has gone wrong', error);
  return Promise.reject(error.message || error);
  }
}