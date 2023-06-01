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
    new MaticnaKnjigaUmrlih('0101010101010', 'Mihajlo', 'Mitrovic', '01.03.2023. 10:00'),
    new MaticnaKnjigaUmrlih('0202020202020', 'Bojan', 'Bojanic', '01.04.2023. 11:00'),
    new MaticnaKnjigaUmrlih('0303030303030', 'Vojkan', 'Simonovic', '01.05.2023. 12:00')
  ];

  title = 'Prikaz matične knjige umrlih';

  korisnici: MaticnaKnjigaUmrlih[] = [
    new MaticnaKnjigaUmrlih('0101010101010', 'Mihajlo', 'Mitrovic', '01.03.2023. 10:00'),
    new MaticnaKnjigaUmrlih('0202020202020', 'Bojan', 'Bojanic', '01.04.2023. 11:00'),
    new MaticnaKnjigaUmrlih('0303030303030', 'Vojkan', 'Simonovic', '01.05.2023. 12:00')
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
