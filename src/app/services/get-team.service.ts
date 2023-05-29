import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTeamService {

  constructor(private http: HttpClient) { }

  getTeam(id:any, season: any) {
    const local = localStorage.getItem('token');
     const headers = new HttpHeaders()
    .set('x-rapidapi-host', 'v3.football.api-sports.io')
    .set('x-rapidapi-key', `${local}`);
    const params = new HttpParams()
    .set('league', season) 
    .set('season',id )

    const url = `https://v3.football.api-sports.io/teams`;
   return this.http.get<any>(url, { params, headers }).pipe(); 
  }
}
