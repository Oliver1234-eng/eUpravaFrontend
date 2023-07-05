import { Component, OnInit } from '@angular/core';
import { MaticnaKnjigaRodjenih } from './MaticnaKnjigaRodjenih';
import { Router } from '@angular/router';
import { MaticarService } from '../maticar.service';

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
  korisnici: MaticnaKnjigaRodjenih[];

  title = 'Prikaz matične knjige rođenih';

  postToUpdate = {
    jmbg: "",
      ime: "",
      prezime: "",
      adresaRodjenja: "",
      imeOca: "",
      prezimeOca: "",
      zanimanjeOca: "",
      imeMajke: "",
      prezimeMajke: "",
      zanimanjeMajke: "",
      drzavljanstvo: "",
      jmbgOca: "",
      jmbgMajke: "",
      mestoIOpstinaRodjenja: "",
      drzavaRodjenja: "",
      danMesecGodinaIVremeRodjenja: "",
      roditelji: "",
      deca: ""
  }

  constructor(private router: Router, private maticarService: MaticarService) { 
    this.maticarService.getAllKnjigeRodjenih().subscribe(korisnik => {
      this.korisnici = korisnik;
    })
  }

  edit(korisnik){
    this.postToUpdate = korisnik;
  }

  updatePost(){
    this.maticarService.updateKorisnik(this.postToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.korisnici = [];
  }

  deleteKorisnik(korisnik){
    this.maticarService.deleteKorisnik(korisnik.jmbg).subscribe(
      (resp) => {
        console.log(resp);
      },
      err => {
        console.log(err);
      }
    );
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
}
