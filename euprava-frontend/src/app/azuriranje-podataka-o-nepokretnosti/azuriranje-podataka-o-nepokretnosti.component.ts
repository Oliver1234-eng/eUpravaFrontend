import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-azuriranje-podataka-o-nepokretnosti',
  templateUrl: './azuriranje-podataka-o-nepokretnosti.component.html',
  styleUrls: ['./azuriranje-podataka-o-nepokretnosti.component.css']
})
export class AzuriranjePodatakaONepokretnostiComponent implements OnInit {

  azuriranjeNepokretnosti: any = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  azurirajNepokretnost() {
    const requestBody = {
      brojParcele: this.azuriranjeNepokretnosti.brojParcele,
      stariVlasnik: this.azuriranjeNepokretnosti.stariVlasnik,
      noviVlasnik: this.azuriranjeNepokretnosti.noviVlasnik
    };
  
    this.http.put('http://localhost:8081/api/katastar/nepokretnosti/izmena', requestBody)
      .subscribe(
        (response) => {
          console.log(response);
          alert("Nepokretnost je ažurirana! Sad treba ažurirati istoriju promena nad ovom nepokretnošću")
          this.router.navigate(['/dodavanje-istorije-promena']);
        },
        (error) => {
          console.error(error);
          alert("Greška! Taj broj parcele ne postoji u bazi ili nisu sva polja popunjena!")
        }
      );
  }

}
