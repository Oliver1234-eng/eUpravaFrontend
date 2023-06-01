import { Component, OnInit } from '@angular/core';
import { MaticnaKnjigaVencanih } from './MaticnaKnjigaVencanih';

@Component({
  selector: 'app-pregled-maticne-knjige-vencanih',
  templateUrl: './pregled-maticne-knjige-vencanih.component.html',
  styleUrls: ['./pregled-maticne-knjige-vencanih.component.css']
})
export class PregledMaticneKnjigeVencanihComponent implements OnInit {

  jmbgMuza: string = '';
  jmbgZene: string = '';

  originalniKorisnici: MaticnaKnjigaVencanih[] = [
    new MaticnaKnjigaVencanih('0404040404040', 'Dragana', 'Pavlovic', '0505050505050', 'Predrag', 'Zivotic', '01.04.2023.'),
    new MaticnaKnjigaVencanih('0606060606060', 'Nevena', 'Mileusnic', '0707070707070', 'Vojislav', 'Petric', '01.05.2023.')
  ];

  title = 'Prikaz matične knjige venčanih';

  korisnici: MaticnaKnjigaVencanih[] = [
    new MaticnaKnjigaVencanih('0404040404040', 'Dragana', 'Pavlovic', '0505050505050', 'Predrag', 'Zivotic', '01.04.2023.'),
    new MaticnaKnjigaVencanih('0606060606060', 'Nevena', 'Mileusnic', '0707070707070', 'Vojislav', 'Petric', '01.05.2023.')
  ];

  constructor() { }

  ngOnInit(): void {
    this.korisnici = [];
  }

  pretrazi(): void {
    if (this.jmbgMuza) {
      const filtriraniKorisnici = this.originalniKorisnici.filter(korisnik => korisnik.jmbgMuza.includes(this.jmbgMuza));
      if (filtriraniKorisnici.length > 0) {
        this.korisnici = filtriraniKorisnici;
      } else {
        this.korisnici = [];
      }
    } else {
      this.korisnici = [];
    }
  }
  
  pretraziPoJmbg(): void {
    if (this.jmbgZene) {
      const filtriraniKorisnici = this.originalniKorisnici.filter(korisnik => korisnik.jmbgZene.includes(this.jmbgZene));
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
