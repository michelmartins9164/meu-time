import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countrie } from '../model/countrie';

@Injectable({
  providedIn: 'root'
})
export class GetCountriesService {
  
  constructor(private http: HttpClient) { }
  getCountries(data: any): Observable<Countrie>{
    const headers = new HttpHeaders()
    .set('x-rapidapi-host', 'v3.football.api-sports.io')
    .set('x-rapidapi-key', `${data}`);

    return this.http.get<Countrie>("https://v3.football.api-sports.io/countries", {headers: headers})
  }

}
