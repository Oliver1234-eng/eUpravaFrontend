import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-potvrdjivanje-ugovora-notar',
  templateUrl: './potvrdjivanje-ugovora-notar.component.html',
  styleUrls: ['./potvrdjivanje-ugovora-notar.component.css']
})
export class PotvrdjivanjeUgovoraNotarComponent implements OnInit {

  azuriranjeUgovora: any = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.azuriranjeUgovora.overen = 'da';
  }

  overiUgovor() {
    const requestBody = {
      id: this.azuriranjeUgovora.id,
      overen: this.azuriranjeUgovora.overen
    };
  
    this.http.put('http://localhost:8080/api/notar/ugovori/overiUgovor', requestBody)
      .subscribe(
        (response) => {
          console.log(response);
          alert("Ugovor je overen! Sad treba podatke o overenom ugovoru proslediti katastru")
          this.router.navigate(['/slanje-podataka-u-katastar']);
        },
        (error) => {
          console.error(error);
          alert("Greška! Taj ugovor ne postoji u bazi ili nisu sva polja popunjena!")
        }
      );
  }

}
