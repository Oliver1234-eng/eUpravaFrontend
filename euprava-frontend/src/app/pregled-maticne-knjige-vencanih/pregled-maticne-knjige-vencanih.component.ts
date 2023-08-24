import { Component, OnInit } from '@angular/core';
import { MaticnaKnjigaVencanih } from './MaticnaKnjigaVencanih';
import { Router } from '@angular/router';
import { MaticarService } from '../maticar.service';

@Component({
  selector: 'app-pregled-maticne-knjige-vencanih',
  templateUrl: './pregled-maticne-knjige-vencanih.component.html',
  styleUrls: ['./pregled-maticne-knjige-vencanih.component.css']
})
export class PregledMaticneKnjigeVencanihComponent implements OnInit {

  jmbgMuza: string = '';
  jmbgZene: string = '';
  korisnici: MaticnaKnjigaVencanih[];

  title = 'Prikaz matične knjige venčanih';

  constructor(private router: Router, private maticarService: MaticarService) {
    this.maticarService.getAllKnjigeVencanih().subscribe(korisnik => {
      this.korisnici = korisnik;
    })
   }

  ngOnInit(): void {
    this.korisnici = [];
  }

  pretrazi(): void {
    if (this.jmbgZene) {
      const filtriraniKorisnici = this.korisnici.filter(korisnik => korisnik.jmbgZene.includes(this.jmbgZene));
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
    if (this.jmbgMuza) {
      const filtriraniKorisnici = this.korisnici.filter(korisnik => korisnik.jmbgMuza.includes(this.jmbgMuza));
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
