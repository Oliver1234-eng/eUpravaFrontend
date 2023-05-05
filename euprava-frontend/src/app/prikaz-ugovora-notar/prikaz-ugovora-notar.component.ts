import { Component, OnInit } from '@angular/core';
import { Ugovor } from './Ugovor';

@Component({
  selector: 'app-prikaz-ugovora-notar',
  templateUrl: './prikaz-ugovora-notar.component.html',
  styleUrls: ['./prikaz-ugovora-notar.component.css']
})
export class PrikazUgovoraNotarComponent implements OnInit {

  sortField: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  previousSortField: string;
  previousSortOrder: 'asc' | 'desc';

  ugovoriPrikaz: any[];

  title = 'Spisak ugovora';

  ugovori: Ugovor[] = [
    new Ugovor(1, '1234567890123', 'Jelena', 'Jovanović', 'Ženski', '01.01.1990.', 'notar', 'OVERA_POTPISA', '01.05.2023', 'da'),
    new Ugovor(1, '1234567890123', 'Jelena', 'Jovanović', 'Ženski', '01.01.1990.', 'notar', 'OVERA', '02.05.2023', 'ne'),
    new Ugovor(1, '1234567890123', 'Jelena', 'Jovanović', 'Ženski', '01.01.1990.', 'notar', 'UGOVOR_O_NEPOKRETNOSTI', '03.05.2023', 'ne'),
  ];

  constructor() { }

  ngOnInit(): void {
    this.prikaziSveUgovore();
  }

  prikaziSveUgovore() {
    this.ugovoriPrikaz = this.ugovori;
  }

  downloadUgovor1PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1FiJtAmxQSJWVcPPqzHGht20fWJxJak-y/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadUgovor2PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1CSLmx8Zv74873lzMmrIZYOQFQ_46fsu2?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadUgovor3PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/11Y7nMfOnVm9v9fslXLRez4JEGe1tTTrj/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
