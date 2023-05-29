import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateLoginService {

  constructor(private http: HttpClient) {
  }
   validateLogin(data: any): Observable<any> {
const headers = new HttpHeaders()
      .set('x-rapidapi-host', 'v3.football.api-sports.io')
      .set('x-rapidapi-key', `${data}`);
    return this.http.get<any>("https://v3.football.api-sports.io/status", {headers:headers}).pipe();
}
}