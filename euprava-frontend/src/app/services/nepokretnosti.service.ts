import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NepokretnostiService {

  private apiURL = 'http://localhost:8080/api/katastar/nepokretnosti';

  constructor(private http: HttpClient) { }

  public getNepokretnosti(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }
}
