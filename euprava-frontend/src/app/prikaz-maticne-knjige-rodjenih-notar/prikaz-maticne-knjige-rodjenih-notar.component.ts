import { Component, OnInit } from '@angular/core';
import { MaticnaKnjigaRodjenih } from '../pregled-maticne-knjige-rodjenih/MaticnaKnjigaRodjenih';
import { Router } from '@angular/router';
import { MaticarService } from '../maticar.service';

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
  korisnici: MaticnaKnjigaRodjenih[];

  title = 'Prikaz matične knjige rođenih';

  constructor(private router: Router, private maticarService: MaticarService) { 
    this.maticarService.getAllKnjigeRodjenih().subscribe(korisnik => {
      this.korisnici = korisnik;
    })
  }

  ngOnInit(): void {
    this.korisnici = [];
  }

  pretrazi(): void {
    if (this.jmbgFilter) {
      const filtriraniKorisnici = this.korisnici.filter(korisnik => korisnik.jmbg.includes(this.jmbgFilter));
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
      const filtriraniKorisnici = this.korisnici.filter(korisnik => korisnik.adresaRodjenja.includes(this.adresaFilter));
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
      const filtriraniKorisnici = this.korisnici.filter(korisnik => korisnik.ime.includes(this.imeFilter));
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
      const filtriraniKorisnici = this.korisnici.filter(korisnik => korisnik.prezime.includes(this.prezimeFilter));
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
