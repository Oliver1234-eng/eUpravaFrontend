import { Component, OnInit } from '@angular/core';
import { NepokretnostiService } from '../services/nepokretnosti.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dodavanje-poruke-notaru',
  templateUrl: './dodavanje-poruke-notaru.component.html',
  styleUrls: ['./dodavanje-poruke-notaru.component.css']
})
export class DodavanjePorukeNotaruComponent implements OnInit {

  porukaNotaru: any = {};

  constructor(private nepokretnostiService: NepokretnostiService, private router: Router) { }

  ngOnInit(): void {
    this.porukaNotaru.datumPromene = '02.06.2023';
  }

  dodajPorukuNotaru() {
    this.nepokretnostiService.dodajPorukuNotaru(this.porukaNotaru)
      .subscribe(
        response => {
          console.log('Poruka je uspešno poslata', response);
          this.porukaNotaru = {};
          alert("Poruka je uspešno poslata!")
          this.router.navigate(['/pretraga-baze-podataka-katastra-nepokretnosti']);
        },
        error => {
          console.error('Greška prilikom slanja poruke.', error);
          alert("Greška! Nisu sva polja popunjena!")
        }
      );
  }

}
