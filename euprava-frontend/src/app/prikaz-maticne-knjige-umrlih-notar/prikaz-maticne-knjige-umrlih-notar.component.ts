import { Component, OnInit } from '@angular/core';
import { MaticnaKnjigaUmrlih } from '../pregled-maticne-knjige-umrlih/MaticnaKnjigaUmrlih';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prikaz-maticne-knjige-umrlih-notar',
  templateUrl: './prikaz-maticne-knjige-umrlih-notar.component.html',
  styleUrls: ['./prikaz-maticne-knjige-umrlih-notar.component.css']
})
export class PrikazMaticneKnjigeUmrlihNotarComponent implements OnInit {

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

  constructor(private router: Router) { }

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

  povratak() {
    this.router.navigate(['/prikaz-ugovora-notar']);
  }

}
