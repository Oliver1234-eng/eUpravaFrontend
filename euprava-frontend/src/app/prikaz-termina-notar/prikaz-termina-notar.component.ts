import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prikaz-termina-notar',
  templateUrl: './prikaz-termina-notar.component.html',
  styleUrls: ['./prikaz-termina-notar.component.css']
})
export class PrikazTerminaNotarComponent implements OnInit {

  termini: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/notar/termini').subscribe(
      data => {
        this.termini = data;
      },
      error => {
        console.error(error);
      }
    );
  }
}
