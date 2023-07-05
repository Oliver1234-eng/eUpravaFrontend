import { Component, OnInit } from '@angular/core';
import { MaticnaKnjigaUmrlih } from './MaticnaKnjigaUmrlih';
import { Router } from '@angular/router';
import { MaticarService } from '../maticar.service';

@Component({
  selector: 'app-pregled-maticne-knjige-umrlih',
  templateUrl: './pregled-maticne-knjige-umrlih.component.html',
  styleUrls: ['./pregled-maticne-knjige-umrlih.component.css']
})
export class PregledMaticneKnjigeUmrlihComponent implements OnInit {

  jmbg: string = '';
  korisnici: MaticnaKnjigaUmrlih[];

  title = 'Prikaz matične knjige umrlih';

  constructor(private router: Router, private maticarService: MaticarService) { 
    this.maticarService.getAllKnjigeUmrlih().subscribe(korisnik => {
      this.korisnici = korisnik;
    })
  }

  ngOnInit(): void {
    this.korisnici = [];
  }

  pretrazi(): void {
    if (this.jmbg) {
      const filtriraniKorisnici = this.korisnici.filter(korisnik => korisnik.jmbg.includes(this.jmbg));
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
