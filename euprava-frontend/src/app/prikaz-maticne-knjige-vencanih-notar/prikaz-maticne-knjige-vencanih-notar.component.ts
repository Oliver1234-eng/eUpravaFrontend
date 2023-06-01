import { Component, OnInit } from '@angular/core';
import { MaticnaKnjigaVencanih } from '../pregled-maticne-knjige-vencanih/MaticnaKnjigaVencanih';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prikaz-maticne-knjige-vencanih-notar',
  templateUrl: './prikaz-maticne-knjige-vencanih-notar.component.html',
  styleUrls: ['./prikaz-maticne-knjige-vencanih-notar.component.css']
})
export class PrikazMaticneKnjigeVencanihNotarComponent implements OnInit {

  jmbgMuza: string = '';
  jmbgZene: string = '';

  originalniKorisnici: MaticnaKnjigaVencanih[] = [
    new MaticnaKnjigaVencanih('0404040404040', 'Dragana', 'Pavlovic', '0505050505050', 'Predrag', 'Zivotic', '01.04.2023.')
  ];

  title = 'Prikaz matične knjige venčanih';

  korisnici: MaticnaKnjigaVencanih[] = [
    new MaticnaKnjigaVencanih('0404040404040', 'Dragana', 'Pavlovic', '0505050505050', 'Predrag', 'Zivotic', '01.04.2023.')
  ];

  constructor(private router: Router) { }

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

  povratak() {
    this.router.navigate(['/prikaz-ugovora-notar']);
  }

}
