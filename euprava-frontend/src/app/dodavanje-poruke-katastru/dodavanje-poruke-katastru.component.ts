import { Component, OnInit } from '@angular/core';
import { NepokretnostiService } from '../services/nepokretnosti.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dodavanje-poruke-katastru',
  templateUrl: './dodavanje-poruke-katastru.component.html',
  styleUrls: ['./dodavanje-poruke-katastru.component.css']
})
export class DodavanjePorukeKatastruComponent implements OnInit {

  porukaKatastru: any = {};

  constructor(private nepokretnostiService: NepokretnostiService, private router: Router) { }

  ngOnInit(): void {
    this.porukaKatastru.datumPromene = '02.06.2023';
  }

  dodajPorukuKatastru() {
    this.nepokretnostiService.dodajPorukuKatastru(this.porukaKatastru)
      .subscribe(
        response => {
          console.log('Poruka je uspešno poslata', response);
          this.porukaKatastru = {};
          alert("Poruka je uspešno poslata!")
          this.router.navigate(['/prikaz-ugovora-notar']);
        },
        error => {
          console.error('Greška prilikom slanja poruke.', error);
          alert("Greška! Nisu sva polja popunjena!")
        }
      );
  }

}
