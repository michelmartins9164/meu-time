import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root',
})
export class StatisticsTeamService {
  constructor(private http: HttpClient) {}
  getStatisticsTeam(league: any, season: any, team: any): Observable<Player> {
    const local = localStorage.getItem('token');
    const url = 'https://v3.football.api-sports.io/players';
    const headers = new HttpHeaders()
      .set('x-rapidapi-host', 'v3.football.api-sports.io')
      .set('x-rapidapi-key', `${local}`);
    const params = new HttpParams()
      .set('league', league)
      .set('season', season)
      .set('team', team);
    return this.http.get<Player>(url, { headers: headers, params });
  }
}
