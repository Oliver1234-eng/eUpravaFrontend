import { Component, OnInit } from '@angular/core';
import { IstorijePromenaService } from '../services/istorije-promena.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-poruka-katastru',
  templateUrl: './poruka-katastru.component.html',
  styleUrls: ['./poruka-katastru.component.css']
})
export class PorukaKatastruComponent implements OnInit {

  public istorijePromena: any[];
  pretragaParcele: string;
  pretragaDatumaPromene: string = '02.06.2023';

  sortField: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  previousSortField: string;
  previousSortOrder: 'asc' | 'desc';

  sortIstorijePromena(sortField: string, sortOrder: 'asc' | 'desc') {
    if (sortField === 'id') {
      this.istorijePromena.sort((a, b) => {
        return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
      });
    } else if (sortField === 'datumPromene') {
      console.log("Sorting by datumPromene field")
      this.istorijePromena.sort((a, b) => {
        return sortOrder === 'asc' ? a[sortField].localeCompare(b[sortField], undefined, { sensitivity: 'base' }) : b[sortField].localeCompare(a[sortField], undefined, { sensitivity: 'base' });
    });
    } else if (sortField === 'brojParcele') {
      this.istorijePromena.sort((a, b) => {
        const brojParceleA = a.brojParcele.toLowerCase();
        const brojParceleB = b.brojParcele.toLowerCase();
        return sortOrder === 'asc' ? brojParceleA.localeCompare(brojParceleB, undefined, { sensitivity: 'base' }) : brojParceleB.localeCompare(brojParceleA, undefined, { sensitivity: 'base' });
      });
    } else if (sortField === 'stariVlasnik') {
      this.istorijePromena.sort((a, b) => {
        const stariVlasnikA = a.stariVlasnik.toLowerCase();
        const stariVlasnikB = b.stariVlasnik.toLowerCase();
        return sortOrder === 'asc' ? stariVlasnikA.localeCompare(stariVlasnikB, undefined, { sensitivity: 'base' }) : stariVlasnikB.localeCompare(stariVlasnikA, undefined, { sensitivity: 'base' });
      });
    } else if (sortField === 'noviVlasnik') {
      this.istorijePromena.sort((a, b) => {
        const noviVlasnikA = a.noviVlasnik.toLowerCase();
        const noviVlasnikB = b.noviVlasnik.toLowerCase();
        return sortOrder === 'asc' ? noviVlasnikA.localeCompare(noviVlasnikB, undefined, { sensitivity: 'base' }) : noviVlasnikB.localeCompare(noviVlasnikA, undefined, { sensitivity: 'base' });
      });
    }
  }

  toggleSortOrder(sortField: string) {
    if (sortField === this.sortField) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.previousSortField = this.sortField;
      this.previousSortOrder = this.sortOrder;
      this.sortField = sortField;
      this.sortOrder = 'asc';
    }
  
    this.sortIstorijePromena(this.sortField, this.sortOrder);
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

  constructor(private istorijePromenaService: IstorijePromenaService, private http: HttpClient) { }

  ngOnInit(): void {
    this.dohvatiIstorijePromena();
  }

  sort(columnName: string) {
    this.istorijePromena.sort((a, b) => {
      if (a[columnName] < b[columnName]) return -1;
      if (a[columnName] > b[columnName]) return 1;
      return 0;
    });
    this.istorijePromena = [...this.istorijePromena];
  }

  dohvatiIstorijePromena() {
    this.istorijePromenaService.getPorukeKatastru().subscribe(data => {
      this.istorijePromena = data;
      this.istorijePromena = data;
    });
  }

  pretraziPoParceli() {
    if (this.pretragaParcele) {
      this.istorijePromena = this.istorijePromena.filter(istorijaPromene => {
        return istorijaPromene.brojParcele.toLowerCase().includes(this.pretragaParcele.toLowerCase());
      });
    } else {
      this.dohvatiIstorijePromena();
    }
  }

  pretraziPoDatumuPromene() {
    if (this.pretragaDatumaPromene) {
      this.istorijePromena = this.istorijePromena.filter(istorijaPromene => {
        return istorijaPromene.datumPromene.toLowerCase().includes(this.pretragaDatumaPromene.toLowerCase());
      });
    } else {
      this.dohvatiIstorijePromena();
    }
  }

  dodajIstorijuPromena() {
    const url = 'http://localhost:4200/dodavanje-istorije-promena';
    window.open(url, '_blank');
  }

}
