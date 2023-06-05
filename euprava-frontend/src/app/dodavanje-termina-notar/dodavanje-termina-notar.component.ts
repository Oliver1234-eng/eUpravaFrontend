import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-dodavanje-termina-notar',
  templateUrl: './dodavanje-termina-notar.component.html',
  styleUrls: ['./dodavanje-termina-notar.component.css'],

})
export class DodavanjeTerminaNotarComponent implements OnInit {

  teams: any[] = [
    { name: '08:00:00', },
    { name: '08:30:00', },
    { name: '09:00:00', },
    { name: '09:30:00', },
    { name: '10:00:00', },
    { name: '10:30:00', },
    { name: '11:00:00', },
    { name: '11:30:00', },
    { name: '12:00:00', },
    { name: '12:30:00', },
    { name: '13:00:00', },
    { name: '13:30:00', },
    { name: '14:00:00', },
    { name: '14:30:00', },
    { name: '15:00:00', },
    { name: '15:30:00', },
    { name: '16:00:00', },
    { name: '16:30:00', },
    { name: '17:00:00', },
    { name: '17:30:00', },
    { name: '18:00:00', },
    { name: '18:30:00', },
    { name: '19:00:00', },
    { name: '19:00:00', },
    { name: '20:00:00', },
    { name: '20:30:00', },

];

selectedTime: string;
selectedDate: string;
selectedKancelarija: string;
dodavanjeTermina: any = {};
kancelarije: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/kancelarija/all/').subscribe(
      data => {
        this.kancelarije = data;
        console.log(data)
      },
      error => {
        console.error(error);
      }
    );
    
  }

  dodajTermin() {
    var dateToDB = moment(this.selectedDate).format("YYYY-MM-DD");

    const requestBody = {
      datum: dateToDB,
      vreme: this.selectedTime,
      kancelarija: this.selectedKancelarija,
    };

    console.log(requestBody);

    this.http.post<any>('http://localhost:8080/api/termin/add/', requestBody)
      .subscribe(
        (response) => {
          console.log(response);
          alert("Termin je napravljen!")
          this.router.navigate(['/prikaz-termina-notar']);
        },
        (error) => {
          console.error(error);
          alert("Greška! Taj termin ne postoji u bazi ili nisu sva polja popunjena!")
        }
      );

  }

}
