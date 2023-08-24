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
    new MaticnaKnjigaRodjenih('1001956630001', 'Ana', 'Popović', 'Kralja Petra I 23', 'Marko', 'Popović', 'inženjer', 'Jelena', 'Popović', 'profesor', 'srpsko', '1301956630002', '1401956630003', 'Beograd, Stari Grad', 'Srbija', '10.01.1995. 12:30', '0', '2'),
    new MaticnaKnjigaRodjenih('1502957780001', 'Ivan', 'Petrović', 'Bulevar Kralja Aleksandra 87', 'Petar', 'Petrović', 'advokat', 'Jelena', 'Petrović', 'lekar', 'srpsko', '2302957780002', '2402957780003', 'Beograd, Vračar', 'Srbija', '15.02.1995. 15:10', '1', '2'),
    new MaticnaKnjigaRodjenih('1304960120001', 'Jovana', 'Nikolić', 'Trg republike 5', 'Nikola', 'Nikolić', 'profesor', 'Milica', 'Nikolić', 'nastavnica', 'srpsko', '2204960120002', '2304960120003', 'Beograd, Stari Grad', 'Srbija', '13.04.1996. 08:45', '2', '2')
  ];

  title = 'Prikaz matične knjige rođenih';

  korisnici: MaticnaKnjigaRodjenih[] = [
    new MaticnaKnjigaRodjenih('1001956630001', 'Ana', 'Popović', 'Kralja Petra I 23', 'Marko', 'Popović', 'inženjer', 'Jelena', 'Popović', 'profesor', 'srpsko', '1301956630002', '1401956630003', 'Beograd, Stari Grad', 'Srbija', '10.01.1995. 12:30', '0', '2'),
    new MaticnaKnjigaRodjenih('1502957780001', 'Ivan', 'Petrović', 'Bulevar Kralja Aleksandra 87', 'Petar', 'Petrović', 'advokat', 'Jelena', 'Petrović', 'lekar', 'srpsko', '2302957780002', '2402957780003', 'Beograd, Vračar', 'Srbija', '15.02.1995. 15:10', '1', '2'),
    new MaticnaKnjigaRodjenih('1304960120001', 'Jovana', 'Nikolić', 'Trg republike 5', 'Nikola', 'Nikolić', 'profesor', 'Milica', 'Nikolić', 'nastavnica', 'srpsko', '2204960120002', '2304960120003', 'Beograd, Stari Grad', 'Srbija', '13.04.1996. 08:45', '2', '2')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  pretrazi() {
    if (this.jmbgFilter) {
      this.korisnici = this.korisnici.filter(korisnik => korisnik.jmbg.includes(this.jmbgFilter));
      if (this.korisnici.length === 0) {
        this.korisnici = this.originalniKorisnici;
      }
    } else {
      this.korisnici = this.originalniKorisnici;
    }
  }
  
  pretraziPoAdresi() {
    if (this.adresaFilter) {
      this.korisnici = this.korisnici.filter(korisnik => korisnik.adresaRodjenja.includes(this.adresaFilter));
      if (this.korisnici.length === 0) {
        this.korisnici = this.originalniKorisnici;
      }
    } else {
      this.korisnici = this.originalniKorisnici;
    }
  }
  
  pretraziPoImenu() {
    if (this.imeFilter) {
      this.korisnici = this.korisnici.filter(korisnik => korisnik.ime.includes(this.imeFilter));
      if (this.korisnici.length === 0) {
        this.korisnici = this.originalniKorisnici;
      }
    } else {
      this.korisnici = this.originalniKorisnici;
    }
  }  

  pretraziPoPrezimenu() {
    if (this.prezimeFilter) {
      this.korisnici = this.korisnici.filter(korisnik => korisnik.prezime.includes(this.prezimeFilter));
      if (this.korisnici.length === 0) {
        this.korisnici = this.originalniKorisnici;
      }
    } else {
      this.korisnici = this.originalniKorisnici;
    }
  }
  
  downloadKorisnik1PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1AyuFpw82n6aXk3LkmdbOns5pEDX_ronz/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadKorisnik2PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/10JJ20rX5u_y1stUg4Nku8fu9fVNu3RpF/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadKorisnik3PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1GFUfbP6JAym_GqtgKCVkxHFntJZoYELk/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
