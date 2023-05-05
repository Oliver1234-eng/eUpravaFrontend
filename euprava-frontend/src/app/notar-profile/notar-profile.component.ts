import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notar-profile',
  templateUrl: './notar-profile.component.html',
  styleUrls: ['./notar-profile.component.css']
})
export class NotarProfileComponent implements OnInit {

  public user = {
    jmbg: '1234567890123',
    ime: 'Jelena',
    prezime: 'Jovanović',
    pol: 'Ženski',
    datumRodjenja: '01.01.1990.',
    mestoRodjenja: 'Beograd',
    imeRoditelja: 'Mirko Jovanović',
    adresa: 'Bulevar oslodođenja 1, Beograd',
    korisnickoIme: 'notar'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
