import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GetDataAPiService {
  constructor(private http: HttpClient) {}

  getData(data: any): Observable<any> {
    const url = 'https://v3.football.api-sports.io/teams/countries';
    const headers = new HttpHeaders()
      .set('x-rapidapi-host', 'v3.football.api-sports.io')
      .set('x-rapidapi-key', `${data}`);

    return from(this.http.get(url, { headers }));
  }}
