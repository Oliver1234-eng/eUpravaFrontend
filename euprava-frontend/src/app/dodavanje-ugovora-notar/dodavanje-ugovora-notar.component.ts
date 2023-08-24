import { Component, OnInit } from '@angular/core';
import { NepokretnostiService } from '../services/nepokretnosti.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dodavanje-ugovora-notar',
  templateUrl: './dodavanje-ugovora-notar.component.html',
  styleUrls: ['./dodavanje-ugovora-notar.component.css']
})
export class DodavanjeUgovoraNotarComponent implements OnInit {

  ugovor: any = {};
  termini: any[] = [];

  constructor(private http: HttpClient, private nepokretnostiService: NepokretnostiService, private router: Router) { }

  ngOnInit(): void {

    this.http.get<any>('http://localhost:8080/api/termin/zakazaniTermini/').subscribe(
      data => {
        this.termini = data;
        console.log(data)
      },
      error => {
        console.error(error);
      }
    );

   this.ugovor.potpis = "",
   this.ugovor.dokument= "",
    this.ugovor.brojParcele= "",
     this.ugovor.stariVlasnik= "",
    this.ugovor.noviVlasnik= ""


  } 

  isNepokretnost(){
    var t = this.ugovor.termin
    console.log(t)
    return true;
  }

  dodajUgovor() {

    const requestBody = {
      notar: this.ugovor.termin.notar,
      termin: this.ugovor.termin,
      vrstaUgovora: this.ugovor.termin.vrstaUgovora,
      potpis: this.ugovor.potpis,
      dokument: this.ugovor.dokument,
      brojParcele: this.ugovor.brojParcele,
      stariVlasnik: this.ugovor.stariVlasnik,
      noviVlasnik: this.ugovor.noviVlasnik,
    };


    this.http.post('http://localhost:8080/api/ugovor/add/', requestBody)
      .subscribe(
        response => {
          console.log('Ugovor je uspešno dodat', response);
          this.ugovor = {};
          alert("Ugovor je uspešno dodat!")
          this.router.navigate(['/prikaz-ugovora-notar']);
        },
        error => {
          console.error('Greška prilikom dodavanja ugovora.', error);
          alert("Greška! Nisu sva polja popunjena!")
        }
      );

      const requestBody1 = {
        notar: this.ugovor.termin.notar,
        katastar: 'katastar',
        datumPromene: this.ugovor.termin.datumIvremeSastanka,
        brojParcele: this.ugovor.brojParcele,
        stariVlasnik: this.ugovor.stariVlasnik,
        noviVlasnik: this.ugovor.noviVlasnik,
      };

      if(requestBody.vrstaUgovora == 'OVERA_NEPOKRETNOSTI'){

        this.http.put('http://localhost:8081/api/katastar/nepokretnosti/izmena', requestBody1)
        .subscribe(
          response => {
            console.log('Ugovor je uspešno dodat', response);
            this.ugovor = {};
            alert("Ugovor je uspešno dodat!")
            this.router.navigate(['/prikaz-ugovora-notar']);
          },
          error => {
            console.error('Greška prilikom dodavanja ugovora.', error);
            alert("Greška! Nisu sva polja popunjena!")
          }
        );

      

      this.http.post('http://localhost:8081/api/katastar/istorijePromena', requestBody1)
      .subscribe(
        response => {
          console.log('Ugovor je uspešno dodat', response);
          this.ugovor = {};
          alert("Ugovor je uspešno dodat!")
          this.router.navigate(['/prikaz-ugovora-notar']);
        },
        error => {
          console.error('Greška prilikom dodavanja ugovora.', error);
          alert("Greška! Nisu sva polja popunjena!")
        }
      );

    }
  }


  openNewTab() {
    const url = 'http://localhost:4200/pretraga-baze-podataka-katastra-nepokretnosti-notar';
    window.open(url, '_blank');
  }

  openNewTab2() {
    const url = 'http://localhost:4200/prikaz-maticne-knjige-rodjenih-notar';
    window.open(url, '_blank');
  }

  openNewTab3() {
    const url = 'http://localhost:4200/prikaz-maticne-knjige-vencanih-notar';
    window.open(url, '_blank');
  }

  openNewTab4() {
    const url = 'http://localhost:4200/prikaz-maticne-knjige-umrlih-notar';
    window.open(url, '_blank');
  }
}
