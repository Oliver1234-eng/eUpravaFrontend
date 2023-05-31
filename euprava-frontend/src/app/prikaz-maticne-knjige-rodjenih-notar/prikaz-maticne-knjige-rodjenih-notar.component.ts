import { Component, OnInit } from '@angular/core';
import { MaticnaKnjigaRodjenih } from '../pregled-maticne-knjige-rodjenih/MaticnaKnjigaRodjenih';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prikaz-maticne-knjige-rodjenih-notar',
  templateUrl: './prikaz-maticne-knjige-rodjenih-notar.component.html',
  styleUrls: ['./prikaz-maticne-knjige-rodjenih-notar.component.css']
})
export class PrikazMaticneKnjigeRodjenihNotarComponent implements OnInit {

  // korisniciPrikaz: any[];
  jmbgFilter: string = '';
  adresaFilter: string = '';
  imeFilter: string = '';
  prezimeFilter: string = '';

  originalniKorisnici: MaticnaKnjigaRodjenih[] = [
    new MaticnaKnjigaRodjenih('1001956630001', 'Ana', 'Popović', 'Kralja Petra I 23', 'Marko', 'Popović', 'inženjer', 'Jelena', 'Popović', 'profesor', 'srpsko', '1301956630002', '1401956630003', 'Beograd, Stari Grad', 'Srbija', '10.01.1995. 12:30', '2', '2'),
    new MaticnaKnjigaRodjenih('1502957780001', 'Ivan', 'Petrović', 'Bulevar Kralja Aleksandra 87', 'Petar', 'Petrović', 'advokat', 'Jelena', 'Petrović', 'lekar', 'srpsko', '2302957780002', '2402957780003', 'Beograd, Vračar', 'Srbija', '15.02.1995. 15:10', '2', '2'),
    new MaticnaKnjigaRodjenih('1304960120001', 'Jovana', 'Nikolić', 'Trg republike 5', 'Nikola', 'Nikolić', 'profesor', 'Milica', 'Nikolić', 'nastavnica', 'srpsko', '2204960120002', '2304960120003', 'Beograd, Stari Grad', 'Srbija', '13.04.1996. 08:45', '2', '2')
  ];

  title = 'Prikaz matične knjige rođenih';

  korisnici: MaticnaKnjigaRodjenih[] = [
    new MaticnaKnjigaRodjenih('1001956630001', 'Ana', 'Popović', 'Kralja Petra I 23', 'Marko', 'Popović', 'inženjer', 'Jelena', 'Popović', 'profesor', 'srpsko', '1301956630002', '1401956630003', 'Beograd, Stari Grad', 'Srbija', '10.01.1995. 12:30', '2', '2'),
    new MaticnaKnjigaRodjenih('1502957780001', 'Ivan', 'Petrović', 'Bulevar Kralja Aleksandra 87', 'Petar', 'Petrović', 'advokat', 'Jelena', 'Petrović', 'lekar', 'srpsko', '2302957780002', '2402957780003', 'Beograd, Vračar', 'Srbija', '15.02.1995. 15:10', '2', '2'),
    new MaticnaKnjigaRodjenih('1304960120001', 'Jovana', 'Nikolić', 'Trg republike 5', 'Nikola', 'Nikolić', 'profesor', 'Milica', 'Nikolić', 'nastavnica', 'srpsko', '2204960120002', '2304960120003', 'Beograd, Stari Grad', 'Srbija', '13.04.1996. 08:45', '2', '2')
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.korisnici = [];
  }

  pretrazi(): void {
    if (this.jmbgFilter) {
      const filtriraniKorisnici = this.originalniKorisnici.filter(korisnik => korisnik.jmbg.includes(this.jmbgFilter));
      if (filtriraniKorisnici.length > 0) {
        this.korisnici = filtriraniKorisnici;
      } else {
        this.korisnici = [];
      }
    } else {
      this.korisnici = [];
    }
  }
  
  pretraziPoAdresi(): void {
    if (this.adresaFilter) {
      const filtriraniKorisnici = this.originalniKorisnici.filter(korisnik => korisnik.adresaRodjenja.includes(this.adresaFilter));
      if (filtriraniKorisnici.length > 0) {
        this.korisnici = filtriraniKorisnici;
      } else {
        this.korisnici = [];
      }
    } else {
      this.korisnici = [];
    }
  }
  
  pretraziPoImenu(): void {
    if (this.imeFilter) {
      const filtriraniKorisnici = this.originalniKorisnici.filter(korisnik => korisnik.ime.includes(this.imeFilter));
      if (filtriraniKorisnici.length > 0) {
        this.korisnici = filtriraniKorisnici;
      } else {
        this.korisnici = [];
      }
    } else {
      this.korisnici = [];
    }
  }

  pretraziPoPrezimenu(): void {
    if (this.prezimeFilter) {
      const filtriraniKorisnici = this.originalniKorisnici.filter(korisnik => korisnik.prezime.includes(this.prezimeFilter));
      if (filtriraniKorisnici.length > 0) {
        this.korisnici = filtriraniKorisnici;
      } else {
        this.korisnici = [];
      }
    } else {
      this.korisnici = [];
    }
  }

  povratak() {
    this.router.navigate(['/prikaz-ugovora-notar']);
  }

}
