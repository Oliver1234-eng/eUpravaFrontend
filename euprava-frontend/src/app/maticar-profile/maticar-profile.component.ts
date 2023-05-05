import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maticar-profile',
  templateUrl: './maticar-profile.component.html',
  styleUrls: ['./maticar-profile.component.css']
})
export class MaticarProfileComponent implements OnInit {

  public user = {
    jmbg: '1234567890144',
    ime: 'Pavle',
    prezime: 'Dejanović',
    pol: 'Muški',
    datumRodjenja: '01.01.1990.',
    mestoRodjenja: 'Beograd',
    imeRoditelja: 'Goran Dejanović',
    adresa: 'Bulevar Mihajla Pupina 1, Beograd',
    korisnickoIme: 'maticar'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
