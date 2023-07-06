import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IstorijePromenaService } from '../services/istorije-promena.service';

@Component({
  selector: 'app-dodavanje-istorije-promena',
  templateUrl: './dodavanje-istorije-promena.component.html',
  styleUrls: ['./dodavanje-istorije-promena.component.css']
})
export class DodavanjeIstorijePromenaComponent implements OnInit {

  istorijaPromena: any = {};

  constructor(private istorijePromeneService: IstorijePromenaService, private router: Router) { }

  ngOnInit(): void {
    this.istorijaPromena.katastar = 'katastar';
    this.istorijaPromena.datumPromene = '29.06.2023';
  }

  dodajIstorijuPromena() {
    this.istorijePromeneService.dodajIstorijuPromena(this.istorijaPromena)
      .subscribe(
        response => {
          console.log('Istorija promena je uspešno dodata', response);
          this.istorijaPromena = {};
          alert("Istorija promena je uspešno dodata!")
          this.router.navigate(['/dodavanje-poruke-notaru']);
        },
        error => {
          console.error('Greška prilikom dodavanja istorije promena.', error);
          alert("Greška! Nisu sva polja popunjena!")
        }
      );
  }

}
