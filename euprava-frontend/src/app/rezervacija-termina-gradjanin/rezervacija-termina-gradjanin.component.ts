import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rezervacija-termina-gradjanin',
  templateUrl: './rezervacija-termina-gradjanin.component.html',
  styleUrls: ['./rezervacija-termina-gradjanin.component.css']
})
export class RezervacijaTerminaGradjaninComponent implements OnInit {

  azuriranjeTermina: any = {};
  vrsteUgovora: any[] = [
    { name: 'OVERA_NEPOKRETNOSTI', },
    { name: 'OVERA_POTPISA', },
    { name: 'OVERA_DOKUMENTA', },
];
termini: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/termin/slobodniTermini/').subscribe(
      data => {
        this.termini = data;
      },
      error => {
        console.error(error);
      }
    );
  }
 
  azurirajTermin() {
    const requestBody = {
      id: this.azuriranjeTermina.id,
      stranka_id: this.azuriranjeTermina.idGradjanina,
      vrstaUgovora: this.azuriranjeTermina.vrstaUgovora,
    };
  
    this.http.post('http://localhost:8080/api/termin/notar/zakazi/', requestBody)
      .subscribe(
        (response) => {
          console.log(response);
          alert("Termin je zakazan!")
          this.router.navigate(['/prikaz-termina-gradjanin']);
        },
        (error) => {
          console.error(error);
          alert("Greška! Taj termin ne postoji u bazi ili nisu sva polja popunjena!")
        }
      );
  }

}
