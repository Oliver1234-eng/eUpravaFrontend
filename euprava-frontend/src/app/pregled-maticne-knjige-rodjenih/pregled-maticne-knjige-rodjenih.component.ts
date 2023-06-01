import { Component, OnInit } from '@angular/core';
import { MaticnaKnjigaRodjenih } from './MaticnaKnjigaRodjenih';

@Component({
  selector: 'app-pregled-maticne-knjige-rodjenih',
  templateUrl: './pregled-maticne-knjige-rodjenih.component.html',
  styleUrls: ['./pregled-maticne-knjige-rodjenih.component.css']
})
export class PregledMaticneKnjigeRodjenihComponent implements OnInit {

  // korisniciPrikaz: any[];
  jmbgFilter: string = '';
  adresaFilter: string = '';
  imeFilter: string = '';
  prezimeFilter: string = '';

  originalniKorisnici: MaticnaKnjigaRodjenih[] = [
    new MaticnaKnjigaRodjenih('1111111111111', 'Pera', 'Peric', 'Bulevar kralja Aleksandra 123', 'Stevan', 'Peric', 'inženjer', 'Milana', 'Peric', 'profesor', 'srpsko', '7777777777777', '8888888888888', 'Beograd, Zvezdara', 'Srbija', '01.01.1950. 12:30', '2', '2'),
    new MaticnaKnjigaRodjenih('2222222222222', 'Zika', 'Peric', 'Knez Mihailova 55', 'Pera', 'Peric', 'advokat', 'Milena', 'Peric', 'lekar', 'srpsko', '1111111111111', '9999999999999', 'Beograd, Stari Grad', 'Srbija', '01.02.1955. 15:10', '2', '2'),
    new MaticnaKnjigaRodjenih('3333333333333', 'Jovan', 'Jovanovic', 'Takovska ulica 17', 'Nikola', 'Jovanovic', 'profesor', 'Tatjana', 'Jovanovic', 'nastavnica', 'srpsko', '3030303030303', '4040404040404', 'Beograd, Vračar', 'Srbija', '01.03.1975. 08:45', '2', '2'),
    new MaticnaKnjigaRodjenih('4444444444444', 'Milan', 'Jovanovic', 'Cara Dušana 89', 'Jovan', 'Jovanovic', 'profesor', 'Suzana', 'Nikolić', 'nastavnica', 'srpsko', '3333333333333', '5050505050505', 'Beograd, Dorćol', 'Srbija', '01.04.1980. 09:45', '2', '2'),
    new MaticnaKnjigaRodjenih('5555555555555', 'Dejan', 'Peric', 'Ulica Kralja Petra 67', 'Zika', 'Peric', 'profesor', 'Milica', 'Peric', 'nastavnica', 'srpsko', '2222222222222', '2020202020202', 'Beograd, Stari Grad', 'Srbija', '01.05.2000. 10:15', '2', '0'),
    new MaticnaKnjigaRodjenih('6666666666666', 'Miroslav', 'Jovanovic', 'Kneza Miloša 12', 'Milan', 'Jovanovic', 'profesor', 'Aleksandra', 'Jovanovic', 'nastavnica', 'srpsko', '4444444444444', '6060606060606', 'Beograd, Savski venac', 'Srbija', '01.06.2000. 13:30', '2', '0'),
  ];

  title = 'Prikaz matične knjige rođenih';

  korisnici: MaticnaKnjigaRodjenih[] = [
    new MaticnaKnjigaRodjenih('1111111111111', 'Pera', 'Peric', 'Bulevar kralja Aleksandra 123', 'Stevan', 'Peric', 'inženjer', 'Milana', 'Peric', 'profesor', 'srpsko', '7777777777777', '8888888888888', 'Beograd, Zvezdara', 'Srbija', '01.01.1950. 12:30', '2', '2'),
    new MaticnaKnjigaRodjenih('2222222222222', 'Zika', 'Peric', 'Knez Mihailova 55', 'Pera', 'Peric', 'advokat', 'Milena', 'Peric', 'lekar', 'srpsko', '1111111111111', '9999999999999', 'Beograd, Stari Grad', 'Srbija', '01.02.1955. 15:10', '2', '2'),
    new MaticnaKnjigaRodjenih('3333333333333', 'Jovan', 'Jovanovic', 'Takovska ulica 17', 'Nikola', 'Jovanovic', 'profesor', 'Tatjana', 'Jovanovic', 'nastavnica', 'srpsko', '3030303030303', '4040404040404', 'Beograd, Vračar', 'Srbija', '01.03.1975. 08:45', '2', '2'),
    new MaticnaKnjigaRodjenih('4444444444444', 'Milan', 'Jovanovic', 'Cara Dušana 89', 'Jovan', 'Jovanovic', 'profesor', 'Suzana', 'Nikolić', 'nastavnica', 'srpsko', '3333333333333', '5050505050505', 'Beograd, Dorćol', 'Srbija', '01.04.1980. 09:45', '2', '2'),
    new MaticnaKnjigaRodjenih('5555555555555', 'Dejan', 'Peric', 'Ulica Kralja Petra 67', 'Zika', 'Peric', 'profesor', 'Milica', 'Peric', 'nastavnica', 'srpsko', '2222222222222', '2020202020202', 'Beograd, Stari Grad', 'Srbija', '01.05.2000. 10:15', '2', '0'),
    new MaticnaKnjigaRodjenih('6666666666666', 'Miroslav', 'Jovanovic', 'Kneza Miloša 12', 'Milan', 'Jovanovic', 'profesor', 'Aleksandra', 'Jovanovic', 'nastavnica', 'srpsko', '4444444444444', '6060606060606', 'Beograd, Savski venac', 'Srbija', '01.06.2000. 13:30', '2', '0'),
  ];

  constructor() { }

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
}
