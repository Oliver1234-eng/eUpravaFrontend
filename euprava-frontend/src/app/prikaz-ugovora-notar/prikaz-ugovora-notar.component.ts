import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prikaz-ugovora-notar',
  templateUrl: './prikaz-ugovora-notar.component.html',
  styleUrls: ['./prikaz-ugovora-notar.component.css']
})
export class PrikazUgovoraNotarComponent implements OnInit {

  ugovori: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8083/api/ugovor/all/').subscribe(
      data => {
        this.ugovori = data;
        console.log(data)
      },
      error => {
        console.error(error); 
      }
    );
  }

  dodajNoviUgovor() {
    this.router.navigate(['/dodavanje-ugovora-notar']);
  }

  proveraNepokretnosti() {
    this.router.navigate(['/pretraga-baze-podataka-katastra-nepokretnosti-notar']);
  }

  proveraGradjanina() {
    this.router.navigate(['/provera-gradjanina-notar']);
  }

  potvrdiUgovor() {
    const url = 'http://localhost:4200/potvrdjivanje-ugovora-notar';
    window.open(url, '_blank');
  }
}
