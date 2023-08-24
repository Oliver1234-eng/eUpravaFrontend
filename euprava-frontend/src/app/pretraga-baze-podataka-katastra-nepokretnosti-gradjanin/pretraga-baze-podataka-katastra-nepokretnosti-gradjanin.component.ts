import { Component, OnInit } from '@angular/core';
import { NepokretnostiService } from '../services/nepokretnosti.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pretraga-baze-podataka-katastra-nepokretnosti-gradjanin',
  templateUrl: './pretraga-baze-podataka-katastra-nepokretnosti-gradjanin.component.html',
  styleUrls: ['./pretraga-baze-podataka-katastra-nepokretnosti-gradjanin.component.css']
})
export class PretragaBazePodatakaKatastraNepokretnostiGradjaninComponent implements OnInit {

  public nepokretnosti: any[];
  pretragaParcele: string;
  public poruka: string = '';

  sortField: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  previousSortField: string;
  previousSortOrder: 'asc' | 'desc';

  sortNepokretnosti(sortField: string, sortOrder: 'asc' | 'desc') {
    if (sortField === 'id') {
      this.nepokretnosti.sort((a, b) => {
        return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
      });
    } else if (sortField === 'adresa') {
      this.nepokretnosti.sort((a, b) => {
        const adresaA = a.adresa.toLowerCase();
        const adresaB = b.adresa.toLowerCase();
        return sortOrder === 'asc' ? adresaA.localeCompare(adresaB, undefined, { sensitivity: 'base' }) : adresaB.localeCompare(adresaA, undefined, { sensitivity: 'base' });
      });
    } else if (sortField === 'brojParcele') {
      this.nepokretnosti.sort((a, b) => {
        const brojParceleA = a.brojParcele.toLowerCase();
        const brojParceleB = b.brojParcele.toLowerCase();
        return sortOrder === 'asc' ? brojParceleA.localeCompare(brojParceleB, undefined, { sensitivity: 'base' }) : brojParceleB.localeCompare(brojParceleA, undefined, { sensitivity: 'base' });
      });
    } else if (sortField === 'brojDelaParcele') {
      this.nepokretnosti.sort((a, b) => {
        const brojDelaParceleA = a.brojDelaParcele.toLowerCase();
        const brojDelaParceleB = b.brojDelaParcele.toLowerCase();
        return sortOrder === 'asc' ? brojDelaParceleA.localeCompare(brojDelaParceleB, undefined, { sensitivity: 'base' }) : brojDelaParceleB.localeCompare(brojDelaParceleA, undefined, { sensitivity: 'base' });
      });
    } else if (sortField === 'povrsina') {
      this.nepokretnosti.sort((a, b) => {
        return sortOrder === 'asc' ? a.povrsina - b.povrsina : b.povrsina - a.povrsina;
      });
    } else if (sortField === 'potes') {
      this.nepokretnosti.sort((a, b) => {
        const potesA = a.potes.toLowerCase();
        const potesB = b.potes.toLowerCase();
        return sortOrder === 'asc' ? potesA.localeCompare(potesB, undefined, { sensitivity: 'base' }) : potesB.localeCompare(potesA, undefined, { sensitivity: 'base' });
      });
    } else if (sortField === 'nacinKoriscenjaZemljista') {
      this.nepokretnosti.sort((a, b) => {
        const nacinKoriscenjaZemljistaA = a.nacinKoriscenjaZemljista.toLowerCase();
        const nacinKoriscenjaZemljistaB = b.nacinKoriscenjaZemljista.toLowerCase();
        return sortOrder === 'asc' ? nacinKoriscenjaZemljistaA.localeCompare(nacinKoriscenjaZemljistaB, undefined, { sensitivity: 'base' }) : nacinKoriscenjaZemljistaB.localeCompare(nacinKoriscenjaZemljistaA, undefined, { sensitivity: 'base' });
      });
    } else if (sortField === 'nacinKoriscenjaObjekta') {
      this.nepokretnosti.sort((a, b) => {
        const nacinKoriscenjaObjektaA = a.nacinKoriscenjaObjekta.toLowerCase();
        const nacinKoriscenjaObjektaB = b.nacinKoriscenjaObjekta.toLowerCase();
        return sortOrder === 'asc' ? nacinKoriscenjaObjektaA.localeCompare(nacinKoriscenjaObjektaB, undefined, { sensitivity: 'base' }) : nacinKoriscenjaObjektaB.localeCompare(nacinKoriscenjaObjektaA, undefined, { sensitivity: 'base' });
      });
    } else if (sortField === 'gradjanin') {
      this.nepokretnosti.sort((a, b) => {
        const gradjaninA = a.gradjanin.ime.toLowerCase();
        const gradjaninB = b.gradjanin.ime.toLowerCase();
        return sortOrder === 'asc' ? gradjaninA.localeCompare(gradjaninB, undefined, { sensitivity: 'base' }) : gradjaninB.localeCompare(gradjaninA, undefined, { sensitivity: 'base' });
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
  
    this.sortNepokretnosti(this.sortField, this.sortOrder);
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

  constructor(private nepokretnostiService: NepokretnostiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.nepokretnosti = [];
  }

  sort(columnName: string) {
    this.nepokretnosti.sort((a, b) => {
      if (a[columnName] < b[columnName]) return -1;
      if (a[columnName] > b[columnName]) return 1;
      return 0;
    });
    this.nepokretnosti = [...this.nepokretnosti];
  }

  dohvatiNepokretnosti() {
    this.nepokretnostiService.getNepokretnosti().subscribe(data => {
      this.nepokretnosti = data;
      this.nepokretnosti = data;
    });
  }

  pretraziPoParceli() {
    if (this.pretragaParcele) {
      this.nepokretnostiService.getNepokretnosti().subscribe(data => {
        this.nepokretnosti = data.filter(nepokretnost => {
          return nepokretnost.brojParcele.toLowerCase().includes(this.pretragaParcele.toLowerCase());
        });
      });
      this.poruka = null;
    } else {
      this.poruka = 'Nepokretnost sa tim brojem parcele ne postoji u bazi.';
      this.nepokretnosti = [];
      //this.dohvatiNepokretnosti();
    }
  }

}
