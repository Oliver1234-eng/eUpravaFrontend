import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-katastar-profile',
  templateUrl: './katastar-profile.component.html',
  styleUrls: ['./katastar-profile.component.css']
})
export class KatastarProfileComponent implements OnInit {

  public user = {
    jmbg: '1234567890123',
    ime: 'Ana',
    prezime: 'Petrović',
    pol: 'Ženski',
    datumRodjenja: '01.01.1980.',
    mestoRodjenja: 'Beograd',
    imeRoditelja: 'Marko Petrović',
    adresa: 'Kralja Petra 1, Beograd',
    korisnickoIme: 'katastar'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
