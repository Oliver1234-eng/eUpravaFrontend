import { Component, OnInit } from '@angular/core';
import { Statistika } from '../prikaz-godisnjih-statistika-katastra/Statistika';

@Component({
  selector: 'app-prikaz-godisnjih-statistika-katastra-gradjanin',
  templateUrl: './prikaz-godisnjih-statistika-katastra-gradjanin.component.html',
  styleUrls: ['./prikaz-godisnjih-statistika-katastra-gradjanin.component.css']
})
export class PrikazGodisnjihStatistikaKatastraGradjaninComponent implements OnInit {

  sortField: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  previousSortField: string;
  previousSortOrder: 'asc' | 'desc';

  godinaPretrage: number;
  statistikePrikaz: any[];

toggleSortOrder(sortField: string) {
  if (sortField === this.sortField) {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  } else {
    this.previousSortField = this.sortField;
    this.previousSortOrder = this.sortOrder;
    this.sortField = sortField;
    this.sortOrder = 'asc';
  }
}

isSortOrderAsc(sortField: string): boolean {
  return sortField === this.sortField && this.sortOrder === 'asc';
}

isSortOrderDesc(sortField: string): boolean {
  return sortField === this.sortField && this.sortOrder === 'desc';
}

isSortOrderNone(sortField: string): boolean {
  return sortField !== this.sortField;
}

  title = 'Statistika katastra u Srbiji';

  statistike: Statistika[] = [
    new Statistika(2022, 25000, 20000, 10, 5000, 7000, 350000000, 10000, 5000, 20000),
    new Statistika(2021, 24000, 22000, 12, 4500, 6500, 300000000, 8000, 4000, 18000),
    new Statistika(2020, 23000, 21000, 15, 4000, 6000, 250000000, 7000, 3500, 16000),
    new Statistika(2019, 24000, 22000, 14, 4600, 8000, 290000000, 9000, 4200, 21000),
    new Statistika(2018, 23000, 21000, 13, 4400, 7500, 280000000, 8500, 4000, 20000),
    new Statistika(2017, 22000, 20000, 12, 4200, 7000, 260000000, 8000, 3800, 19000),
    new Statistika(2016, 21000, 19000, 11, 4000, 6500, 240000000, 7500, 3600, 18000),
    new Statistika(2015, 20000, 18000, 10, 3800, 6000, 230000000, 7000, 3400, 17000),
    new Statistika(2014, 19000, 17000, 9, 3700, 5500, 220000000, 6500, 3200, 15000),
    new Statistika(2013, 18000, 16000, 8, 3500, 5000, 200000000, 6000, 3000, 14000),
  ];

  constructor() { }

  ngOnInit(): void {
    this.prikaziSveStatistike();
  }

  sort(columnName: string) {
    this.statistike.sort((a, b) => {
      if (a[columnName] < b[columnName]) return -1;
      if (a[columnName] > b[columnName]) return 1;
      return 0;
    });
    this.statistike = [...this.statistike];
  }

  pretraziPoGodini() {
    if (!this.godinaPretrage) {
      this.statistikePrikaz = this.statistike;
    } else {
      this.statistikePrikaz = this.statistike.filter(statistika => statistika.godina === this.godinaPretrage);
    }
  }

  prikaziSveStatistike() {
    this.statistikePrikaz = this.statistike;
  }

  download2013WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/1rfGNS31VqatjrYsyhNHgtACX5MsBizc5/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2013PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1Tw72U6VNNV1uSV79jCytjUE92Fupp8mF/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2014WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/1RFFd7Lac29DJw3eKb7Li9sVJb2OX2eUP/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2014PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1UUWmumhyhPUR7Xj2ifxAbQsqwkc1OICM/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2015WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/18hc8N7e0hiEvBzNARSeWYTIdUDH5yUaf/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2015PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/19K4LZ2Y67jg0QkwSz2m3_vmemGO5sp6V/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2016WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/1zOYdEHpsj7iv9DhVxLops_tS5URLPVgh/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2016PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1mR_BJxLlWWgckFD8LG5u6PdzqRbhYfwS/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2017WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/1caWxr-7QfJR_J5dNjvKs7sLRe01vmI7c/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2017PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1o8NjC1y7hOvK-V3xNt6b4SodCh5XssQd/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2018WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/1zlSnGxoAkyxi3_96BbzzMqCtLTmhOmh_/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2018PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1o78aw3vFWNlyPHmdn3NfH19-XHC1lF_5/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2019WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/1-8_8qlfcleUCueNk7zOfM6RKsoDZrGzs/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2019PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1z2NipYIf10ReRxb9ikzk0HHzfvP2Ez6Z/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2020WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/17_zhJwuOQlBRzXvgD5zd6B-kL_YOpOOH/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2020PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1lRQgoy5xuxI8tASjdwWtUkKfErGfQXEJ/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2021WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/10UDG2_WRnYXOvkSr1x8mRvCLibzZ0EHl/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2021PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/15GhogGiPvzSS0uFAzZn2-iXW9sTFkR9u/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2022WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/1be4ygqI_r6U3HEPV7dH0j7X_5yUgv3mY/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2022PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1azqGAE1w3S5Ja2nxVF74PleQnd-5-6ij/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
