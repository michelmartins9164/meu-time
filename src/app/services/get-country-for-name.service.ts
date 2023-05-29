import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { League } from '../model/league';

@Injectable({
  providedIn: 'root',
})
export class GetCountryForNameService {
  constructor(private http: HttpClient) {}

  geCountryForName(): Observable<any> {
    
    const local = localStorage.getItem('token');
    const url = `https://v3.football.api-sports.io/leagues`;
    const headers = new HttpHeaders()
    .set('x-rapidapi-host', 'v3.football.api-sports.io')
    .set('x-rapidapi-key', `${local}`);
    const params = new HttpParams()
    .set("country", "Brazil")
    .set("season", "2020")
    
    return this.http.get<League>(url, { params,headers}).pipe(); 


  }
}
