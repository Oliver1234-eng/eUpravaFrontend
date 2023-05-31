import { Component, OnInit } from '@angular/core';
import { MaticnaKnjigaUmrlih } from './MaticnaKnjigaUmrlih';

@Component({
  selector: 'app-pregled-maticne-knjige-umrlih',
  templateUrl: './pregled-maticne-knjige-umrlih.component.html',
  styleUrls: ['./pregled-maticne-knjige-umrlih.component.css']
})
export class PregledMaticneKnjigeUmrlihComponent implements OnInit {

  jmbg: string = '';

  originalniKorisnici: MaticnaKnjigaUmrlih[] = [
    new MaticnaKnjigaUmrlih('1001956634441', 'Branko', 'Popović', '01.03.2023. 10:00'),
    new MaticnaKnjigaUmrlih('1502957781111', 'Milan', 'Petrović', '01.04.2023. 11:00'),
    new MaticnaKnjigaUmrlih('1304960124441', 'Jovan', 'Nikolić', '01.05.2023. 12:00')
  ];

  title = 'Prikaz matične knjige umrlih';

  korisnici: MaticnaKnjigaUmrlih[] = [
    new MaticnaKnjigaUmrlih('1001956634441', 'Branko', 'Popović', '01.03.2023. 10:00'),
    new MaticnaKnjigaUmrlih('1502957781111', 'Milan', 'Petrović', '01.04.2023. 11:00'),
    new MaticnaKnjigaUmrlih('1304960124441', 'Jovan', 'Nikolić', '01.05.2023. 12:00')
  ];

  constructor() { }

  ngOnInit(): void {
    this.korisnici = [];
  }

  pretrazi(): void {
    if (this.jmbg) {
      const filtriraniKorisnici = this.originalniKorisnici.filter(korisnik => korisnik.jmbg.includes(this.jmbg));
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
