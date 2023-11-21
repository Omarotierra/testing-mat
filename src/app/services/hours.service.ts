import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoursService {

  apiURL = 'https://nodeapi-service-omarotierra.cloud.okteto.net/hours';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  getHours(): Observable<any> {
    return this.http.get<any>(this.apiURL, this.httpOptions)
      .pipe(
        retry(1),
      );
  }
}
