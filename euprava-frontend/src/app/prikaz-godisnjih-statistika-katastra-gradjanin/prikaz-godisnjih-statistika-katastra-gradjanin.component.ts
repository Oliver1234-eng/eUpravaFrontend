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

}
