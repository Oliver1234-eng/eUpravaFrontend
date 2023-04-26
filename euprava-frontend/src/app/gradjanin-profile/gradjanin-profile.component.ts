import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradjanin-profile',
  templateUrl: './gradjanin-profile.component.html',
  styleUrls: ['./gradjanin-profile.component.css']
})
export class GradjaninProfileComponent implements OnInit {

  public user = {
    jmbg: '0101996723456',
    ime: 'Nikola',
    prezime: 'Marković',
    pol: 'Muški',
    datumRodjenja: '01.01.1996.',
    mestoRodjenja: 'Beograd',
    imeRoditelja: 'Milan Marković',
    adresa: 'Cara Dušana 15, Beograd',
    korisnickoIme: 'gradjanin'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
