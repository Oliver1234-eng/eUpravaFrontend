import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prikaz-termina-notar',
  templateUrl: './prikaz-termina-notar.component.html',
  styleUrls: ['./prikaz-termina-notar.component.css']
})
export class PrikazTerminaNotarComponent implements OnInit {

  termini: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/termin/all/').subscribe(
      data => {
        this.termini = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  dodajNoviUgovor() {
    const url = 'http://localhost:4200/dodavanje-ugovora-notar';
    window.open(url, '_blank');
  }

  dodajNoviTermin() {
    const url = 'http://localhost:4200/dodavanje-termina-notar';
    window.open(url, '_blank');
  }

}
