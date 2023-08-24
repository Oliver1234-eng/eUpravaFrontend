import { Component, OnInit } from '@angular/core';
import { NepokretnostiService } from '../services/nepokretnosti.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dodavanje-nove-nepokretnosti',
  templateUrl: './dodavanje-nove-nepokretnosti.component.html',
  styleUrls: ['./dodavanje-nove-nepokretnosti.component.css']
})
export class DodavanjeNoveNepokretnostiComponent implements OnInit {

  nepokretnost: any = {};

  constructor(private nepokretnostiService: NepokretnostiService, private router: Router) { }

  ngOnInit(): void {
    this.nepokretnost.nacinKoriscenjaZemljista = 'ZEMLJISTE_POD_ZGRADOM';
    this.nepokretnost.nacinKoriscenjaObjekta = 'GRADJEVINSKO_ZEMLJISTE';
    this.nepokretnost.katastar = 'katastar';
  }

  dodajNepokretnost() {
    this.nepokretnostiService.dodajNepokretnost(this.nepokretnost)
      .subscribe(
        response => {
          console.log('Nepokretnost uspešno dodata', response);
          this.nepokretnost = {};
          alert("Nepokretnost je uspešno dodata! Sad treba ažurirati istoriju promena nad ovom nepokretnošću")
          this.router.navigate(['/dodavanje-istorije-promena']);
        },
        error => {
          console.error('Greška prilikom dodavanja nepokretnosti.', error);
          alert("Greška! Nisu sva polja popunjena!")
        }
      );
  }

}
