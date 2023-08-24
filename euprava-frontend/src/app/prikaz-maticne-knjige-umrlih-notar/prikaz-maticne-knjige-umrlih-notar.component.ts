import { Component, OnInit } from '@angular/core';
import { MaticnaKnjigaUmrlih } from '../pregled-maticne-knjige-umrlih/MaticnaKnjigaUmrlih';
import { Router } from '@angular/router';
import { MaticarService } from '../maticar.service';

@Component({
  selector: 'app-prikaz-maticne-knjige-umrlih-notar',
  templateUrl: './prikaz-maticne-knjige-umrlih-notar.component.html',
  styleUrls: ['./prikaz-maticne-knjige-umrlih-notar.component.css']
})
export class PrikazMaticneKnjigeUmrlihNotarComponent implements OnInit {

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

  povratak() {
    this.router.navigate(['/prikaz-ugovora-notar']);
  }

}
