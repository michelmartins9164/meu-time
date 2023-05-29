import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetStaticsService {
  constructor(private http: HttpClient) {}
  getStatics(league: any, season: any, team: any) {
    const local = localStorage.getItem('token');
    const url = `https://v3.football.api-sports.io/teams/statistics`;
    const headers = new HttpHeaders()
      .set('x-rapidapi-host', 'v3.football.api-sports.io')
      .set('x-rapidapi-key', `${local}`);
    const params = new HttpParams()
      .set('league', league)
      .set('season', season)
      .set('team', team);
    return this.http.get<any>(url, { params, headers }).pipe();
  }
}
