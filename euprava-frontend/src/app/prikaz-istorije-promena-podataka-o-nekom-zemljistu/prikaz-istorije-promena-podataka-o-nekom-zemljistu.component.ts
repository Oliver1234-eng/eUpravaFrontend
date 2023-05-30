import { Component, OnInit } from '@angular/core';
import { IstorijePromenaService } from '../services/istorije-promena.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prikaz-istorije-promena-podataka-o-nekom-zemljistu',
  templateUrl: './prikaz-istorije-promena-podataka-o-nekom-zemljistu.component.html',
  styleUrls: ['./prikaz-istorije-promena-podataka-o-nekom-zemljistu.component.css']
})
export class PrikazIstorijePromenaPodatakaONekomZemljistuComponent implements OnInit {

  public istorijePromena: any[];
  pretragaParcele: string;

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
    } else if (sortField === 'adresa') {
      this.istorijePromena.sort((a, b) => {
        const adresaA = a.nepokretnost.adresa.toLowerCase();
        const adresaB = b.nepokretnost.adresa.toLowerCase();
        return sortOrder === 'asc' ? adresaA.localeCompare(adresaB, undefined, { sensitivity: 'base' }) : adresaB.localeCompare(adresaA, undefined, { sensitivity: 'base' });
      });
    } else if (sortField === 'brojParcele') {
      this.istorijePromena.sort((a, b) => {
        const brojParceleA = a.nepokretnost.brojParcele.toLowerCase();
        const brojParceleB = b.nepokretnost.brojParcele.toLowerCase();
        return sortOrder === 'asc' ? brojParceleA.localeCompare(brojParceleB, undefined, { sensitivity: 'base' }) : brojParceleB.localeCompare(brojParceleA, undefined, { sensitivity: 'base' });
      });
    } else if (sortField === 'brojDelaParcele') {
      this.istorijePromena.sort((a, b) => {
        const brojDelaParceleA = a.nepokretnost.brojDelaParcele.toLowerCase();
        const brojDelaParceleB = b.nepokretnost.brojDelaParcele.toLowerCase();
        return sortOrder === 'asc' ? brojDelaParceleA.localeCompare(brojDelaParceleB, undefined, { sensitivity: 'base' }) : brojDelaParceleB.localeCompare(brojDelaParceleA, undefined, { sensitivity: 'base' });
      });
    } else if (sortField === 'povrsina') {
      this.istorijePromena.sort((a, b) => {
        return sortOrder === 'asc' ? a.nepokretnost.povrsina - b.nepokretnost.povrsina : b.nepokretnost.povrsina - a.nepokretnost.povrsina;
      });
    } else if (sortField === 'potes') {
      this.istorijePromena.sort((a, b) => {
        const potesA = a.nepokretnost.potes.toLowerCase();
        const potesB = b.nepokretnost.potes.toLowerCase();
        return sortOrder === 'asc' ? potesA.localeCompare(potesB, undefined, { sensitivity: 'base' }) : potesB.localeCompare(potesA, undefined, { sensitivity: 'base' });
      });
    } else if (sortField === 'nacinKoriscenjaZemljista') {
      this.istorijePromena.sort((a, b) => {
        const nacinKoriscenjaZemljistaA = a.nepokretnost.nacinKoriscenjaZemljista.toLowerCase();
        const nacinKoriscenjaZemljistaB = b.nepokretnost.nacinKoriscenjaZemljista.toLowerCase();
        return sortOrder === 'asc' ? nacinKoriscenjaZemljistaA.localeCompare(nacinKoriscenjaZemljistaB, undefined, { sensitivity: 'base' }) : nacinKoriscenjaZemljistaB.localeCompare(nacinKoriscenjaZemljistaA, undefined, { sensitivity: 'base' });
      });
    } else if (sortField === 'nacinKoriscenjaObjekta') {
      this.istorijePromena.sort((a, b) => {
        const nacinKoriscenjaObjektaA = a.nepokretnost.nacinKoriscenjaObjekta.toLowerCase();
        const nacinKoriscenjaObjektaB = b.nepokretnost.nacinKoriscenjaObjekta.toLowerCase();
        return sortOrder === 'asc' ? nacinKoriscenjaObjektaA.localeCompare(nacinKoriscenjaObjektaB, undefined, { sensitivity: 'base' }) : nacinKoriscenjaObjektaB.localeCompare(nacinKoriscenjaObjektaA, undefined, { sensitivity: 'base' });
      });
    } else if (sortField === 'katastar') {
      this.istorijePromena.sort((a, b) => {
        const katastarA = a.katastar.toLowerCase();
        const katastarB = b.katastar.toLowerCase();
        return sortOrder === 'asc' ? katastarA.localeCompare(katastarB, undefined, { sensitivity: 'base' }) : katastarB.localeCompare(katastarA, undefined, { sensitivity: 'base' });
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
    this.istorijePromenaService.getIstorijePromena().subscribe(data => {
      this.istorijePromena = data;
      this.istorijePromena = data;
    });
  }

  pretraziPoParceli() {
    if (this.pretragaParcele) {
      this.istorijePromena = this.istorijePromena.filter(istorijaPromene => {
        return istorijaPromene.nepokretnost.brojParcele.toLowerCase().includes(this.pretragaParcele.toLowerCase());
      });
    } else {
      this.dohvatiIstorijePromena();
    }
  }

}
