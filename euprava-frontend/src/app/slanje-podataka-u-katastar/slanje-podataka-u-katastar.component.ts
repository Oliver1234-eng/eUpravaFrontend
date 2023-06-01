import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slanje-podataka-u-katastar',
  templateUrl: './slanje-podataka-u-katastar.component.html',
  styleUrls: ['./slanje-podataka-u-katastar.component.css']
})
export class SlanjePodatakaUKatastarComponent implements OnInit {

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
  
    this.http.put('http://localhost:8080/api/katastar/nepokretnosti/izmena', requestBody)
      .subscribe(
        (response) => {
          console.log(response);
          alert("Podaci su poslati u katastar! Sad treba obavestiti katastarskog radnika da ažurira istoriju promena za to zemljište")
          this.router.navigate(['/dodavanje-poruke-katastru']);
        },
        (error) => {
          console.error(error);
          alert("Greška! Taj broj parcele ne postoji u bazi ili nisu sva polja popunjena!")
        }
      );
  }

}
