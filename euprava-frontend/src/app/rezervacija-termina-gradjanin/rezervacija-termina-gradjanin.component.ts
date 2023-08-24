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

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  azurirajTermin() {
    const requestBody = {
      id: this.azuriranjeTermina.id,
      jmbgGradjanina: this.azuriranjeTermina.jmbgGradjanina,
      imeIPrezimeGradjanina: this.azuriranjeTermina.imeIPrezimeGradjanina,
      brojParcele: this.azuriranjeTermina.brojParcele,
      jmbgVlasnika: this.azuriranjeTermina.jmbgVlasnika,
      imeIPrezimeVlasnika: this.azuriranjeTermina.imeIPrezimeVlasnika,
      srodstvo: this.azuriranjeTermina.srodstvo
    };
  
    this.http.put('http://localhost:8080/api/notar/termini/updateTerminGradjanin', requestBody)
      .subscribe(
        (response) => {
          console.log(response);
          alert("Termin je rezervisan!")
          this.router.navigate(['/prikaz-termina-gradjanin']);
        },
        (error) => {
          console.error(error);
          alert("Greška! Taj termin ne postoji u bazi ili nisu sva polja popunjena!")
        }
      );
  }

}
