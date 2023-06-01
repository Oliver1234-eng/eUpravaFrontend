import { Component, OnInit } from '@angular/core';
import { NepokretnostiService } from '../services/nepokretnosti.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dodavanje-ugovora-notar',
  templateUrl: './dodavanje-ugovora-notar.component.html',
  styleUrls: ['./dodavanje-ugovora-notar.component.css']
})
export class DodavanjeUgovoraNotarComponent implements OnInit {

  ugovor: any = {};

  constructor(private nepokretnostiService: NepokretnostiService, private router: Router) { }

  ngOnInit(): void {
    this.ugovor.notar = 'Notar Notaric';
    this.ugovor.vrstaUgovora = 'UGOVOR_O_PRENOSU_ZEMLJISTA';
    this.ugovor.overen = 'ne';
  }

  dodajUgovor() {
    this.nepokretnostiService.dodajUgovor(this.ugovor)
      .subscribe(
        response => {
          console.log('Ugovor uspešno dodat', response);
          this.ugovor = {};
          alert("Ugovor je uspešno dodat!")
          this.router.navigate(['/prikaz-ugovora-notar']);
        },
        error => {
          console.error('Greška prilikom dodavanja ugovora.', error);
          alert("Greška! Nisu sva polja popunjena!")
        }
      );
  }

  openNewTab() {
    const url = 'http://localhost:4200/pretraga-baze-podataka-katastra-nepokretnosti-notar';
    window.open(url, '_blank');
  }

  openNewTab2() {
    const url = 'http://localhost:4200/prikaz-maticne-knjige-rodjenih-notar';
    window.open(url, '_blank');
  }

  openNewTab3() {
    const url = 'http://localhost:4200/prikaz-maticne-knjige-vencanih-notar';
    window.open(url, '_blank');
  }

  openNewTab4() {
    const url = 'http://localhost:4200/prikaz-maticne-knjige-umrlih-notar';
    window.open(url, '_blank');
  }
}
