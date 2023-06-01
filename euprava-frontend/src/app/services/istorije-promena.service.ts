import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IstorijePromenaService {

  private apiURL = 'http://localhost:8080/api/katastar/istorijePromena';
  private apiURL2 = 'http://localhost:8080/api/katastar/porukeKatastru';
  private apiURL3 = 'http://localhost:8080/api/katastar/porukeNotaru';

  constructor(private http: HttpClient) { }

  public getIstorijePromena(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  public getPorukeKatastru(): Observable<any> {
    return this.http.get<any>(this.apiURL2);
  }

  public getPorukeNotaru(): Observable<any> {
    return this.http.get<any>(this.apiURL3);
  }

  dodajIstorijuPromena(istorijaPromena: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/katastar/istorijePromena', istorijaPromena);
  }
}
