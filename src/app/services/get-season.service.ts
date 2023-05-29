import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetSeasonService {
  constructor(private http: HttpClient) {}
  geSeason(): Observable<any> {
   const url = `https://v3.football.api-sports.io/leagues/seasons`;
    const local = localStorage.getItem('token');
    const headers = new HttpHeaders()
    .set('x-rapidapi-host', 'v3.football.api-sports.io')
    .set('x-rapidapi-key', `${local}`);
    const params = new HttpParams()
    return this.http.get<any>(url, { params, headers }).pipe();
  }
}
