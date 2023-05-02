import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IstorijePromenaService {

  private apiURL = 'http://localhost:8080/api/katastar/istorijePromena';

  constructor(private http: HttpClient) { }

  public getIstorijePromena(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }
}
