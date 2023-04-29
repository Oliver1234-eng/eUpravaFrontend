import { Component, OnInit } from '@angular/core';
import { StatistikaInfoCentra } from './StatistikaInfoCentra';

@Component({
  selector: 'app-prikaz-godisnjih-statistika-info-centra',
  templateUrl: './prikaz-godisnjih-statistika-info-centra.component.html',
  styleUrls: ['./prikaz-godisnjih-statistika-info-centra.component.css']
})
export class PrikazGodisnjihStatistikaInfoCentraComponent implements OnInit {

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

title = 'Statistika info centra katastra u Srbiji';

statistikeInfoCentra: StatistikaInfoCentra[] = [
  new StatistikaInfoCentra(2022, 6800, 360, 3200, 700, 7500, 4300),
  new StatistikaInfoCentra(2021, 6500, 330, 3000, 650, 7000, 4000),
  new StatistikaInfoCentra(2020, 6200, 300, 2800, 600, 6500, 3800),
  new StatistikaInfoCentra(2019, 6000, 270, 2600, 550, 6000, 3500),
  new StatistikaInfoCentra(2018, 5800, 240, 2400, 500, 5500, 3300),
  new StatistikaInfoCentra(2017, 5500, 210, 2200, 450, 5000, 3000),
  new StatistikaInfoCentra(2016, 5200, 180, 2000, 400, 4500, 2700),
  new StatistikaInfoCentra(2015, 5000, 150, 1800, 350, 4000, 2500),
  new StatistikaInfoCentra(2014, 4800, 120, 1700, 300, 3500, 2200),
  new StatistikaInfoCentra(2013, 4500, 90, 1500, 250, 3000, 2000),
];

  constructor() { }

  ngOnInit(): void {
    this.prikaziSveStatistike();
  }

  sort(columnName: string) {
    this.statistikeInfoCentra.sort((a, b) => {
      if (a[columnName] < b[columnName]) return -1;
      if (a[columnName] > b[columnName]) return 1;
      return 0;
    });
    this.statistikeInfoCentra = [...this.statistikeInfoCentra];
  }

  pretraziPoGodini() {
    if (!this.godinaPretrage) {
      this.statistikePrikaz = this.statistikeInfoCentra;
    } else {
      this.statistikePrikaz = this.statistikeInfoCentra.filter(statistika => statistika.godina === this.godinaPretrage);
    }
  }

  prikaziSveStatistike() {
    this.statistikePrikaz = this.statistikeInfoCentra;
  }

  download2013WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/1iI9A5At6Ycp5HbqZPlEhxUmpDlSKgfmQ/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2013PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1xyf1nFW00nswgt9v7RokidOrTXyWJw8G/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2014WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/1Mgn3x-DlLgGyB2XiHbLu2fJPiocCxGQh/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2014PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1URpbkW6IGUGf3aIJbp3sL4yhFcTrM5B5/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2015WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/1162QoCvBedxs9IVn1eJ4uo2Hy3XZsYRv/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2015PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1VJuhm9g1x-vwMxhPMW5gKHiWoHV_bvxk/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2016WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/1xJLx29g_JFgPuYewCMthqaA_F2rxzX2L/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2016PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1RDatKL7AwmjlMSSHBnIHoN3VX0DDqEac/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2017WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/1s0y3DlDMu0MWSjP1XrgDvUcXW4WXBY4X/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2017PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1-30-u0Fw59NbONIo9F_8InnGR0oOjXPi/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2018WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/1znItGE6LIGVvLJaT7zgQVdvjBDtzikWQ/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2018PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1qLWno8byOCgleTLslL6Od-0WttjM6yI2/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2019WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/1EGWZCESc4f0ZOgC0SfSCm4Ef5ibbmq3g/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2019PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1B7wzkFi-KbigA9upcoaTvmWEr_-wW9Jy/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2020WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/1jc5Vx279B78FE_n95PRWQqz_fehNsACf/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2020PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/14gq-LgTHHrw4j6KSGTPKVyTI6e-ysUgo/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2021WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/1rwbvx_4LqVmZ9E9gYOnMHgjqCMvK4H0-/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2021PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1c8P9gEbB9GPqE9gPrhsRwp62SouoIoeC/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  download2022WORD() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://docs.google.com/document/d/1e7OYgL8SM6E_eR-KByrQA_N3Mgm7hl_6/export?format=docx');
    link.setAttribute('download', 'izvestaj.docx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  download2022PDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1B03W4YKGs-1miqAkQcz6io6U3U37iE1q/view?usp=sharing');
    link.setAttribute('download', 'izvestaj.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
