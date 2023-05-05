import { Component, OnInit } from '@angular/core';
import { Termin } from './Termin';

@Component({
  selector: 'app-prikaz-termina-notar',
  templateUrl: './prikaz-termina-notar.component.html',
  styleUrls: ['./prikaz-termina-notar.component.css']
})
export class PrikazTerminaNotarComponent implements OnInit {

  sortField: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  previousSortField: string;
  previousSortOrder: 'asc' | 'desc';

  terminiPrikaz: any[];

  title = 'Spisak termina';

  termini: Termin[] = [
    new Termin(1, '02.05.2023. 13:00', '30 min', 'OVERA_POTPISA', 'ZAVRSEN', 'da'),
    new Termin(1, '03.05.2023. 14:00', '1 h', 'OVERA', 'ZAVRSEN', 'da'),
    new Termin(1, '04.05.2023. 15:00', '45 min', 'UGOVOR_O_NEPOKRETNOSTI', 'ZAVRSEN', 'ne'),
  ];

  constructor() { }

  ngOnInit(): void {
    this.prikaziSveUgovore();
  }

  prikaziSveUgovore() {
    this.terminiPrikaz = this.termini;
  }

  downloadTermin1PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1OYT6x-Wd7ydRDJt-YHVHxxGPHtB3iJHL/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadTermin2PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1awg4sqN94kYlydzYD7plaphE6ZwA4BZL/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadTermin3PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1zkDo5GEjFrJhXGPZjo8RrbMb1zWE-D0D/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
