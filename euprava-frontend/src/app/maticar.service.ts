import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaticnaKnjigaRodjenih } from './pregled-maticne-knjige-rodjenih/MaticnaKnjigaRodjenih';
import { Observable } from 'rxjs';
import { MaticnaKnjigaVencanih } from './pregled-maticne-knjige-vencanih/MaticnaKnjigaVencanih';
import { MaticnaKnjigaUmrlih } from './pregled-maticne-knjige-umrlih/MaticnaKnjigaUmrlih';

@Injectable({
  providedIn: 'root'
})
export class MaticarService {

  constructor(private http: HttpClient) { }

  getAllKnjigeRodjenih(): Observable<Array<MaticnaKnjigaRodjenih>> {
    return this.http.get<Array<MaticnaKnjigaRodjenih>>('http://localhost:8082/api/maticar/maticnaKnjigaRodjenih/all');
  }

  getAllKnjigeVencanih(): Observable<Array<MaticnaKnjigaVencanih>> {
    return this.http.get<Array<MaticnaKnjigaVencanih>>('http://localhost:8082/api/maticar/maticnaKnjigaVencanih/all');
  }

  getAllKnjigeUmrlih(): Observable<Array<MaticnaKnjigaUmrlih>> {
    return this.http.get<Array<MaticnaKnjigaUmrlih>>('http://localhost:8082/api/maticar/maticnaKnjigaUmrlih/all');
  }

  createMaticnaKnjigaRodjenih(maticnaKnjigaRodjenihModel: MaticnaKnjigaRodjenih): Observable<MaticnaKnjigaRodjenih> {
    return this.http.post<MaticnaKnjigaRodjenih>('http://localhost:8082/api/maticar/maticnaKnjigaRodjenih',
    maticnaKnjigaRodjenihModel);
  }

  createMaticnaKnjigaVencanih(maticnaKnjigaVencanihModel: MaticnaKnjigaVencanih): Observable<MaticnaKnjigaVencanih> {
    return this.http.post<MaticnaKnjigaVencanih>('http://localhost:8082/api/maticar/maticnaKnjigaVencanih',
    maticnaKnjigaVencanihModel);
  }

  createMaticnaKnjigaUmrlih(maticnaKnjigaUmrlihModel: MaticnaKnjigaUmrlih): Observable<MaticnaKnjigaUmrlih> {
    return this.http.post<MaticnaKnjigaUmrlih>('http://localhost:8082/api/maticar/maticnaKnjigaUmrlih',
    maticnaKnjigaUmrlihModel);
  }

  updateKorisnik(postPayload: MaticnaKnjigaRodjenih): Observable<any> {
    return this.http.put('http://localhost:8082/api/maticar/maticnaKnjigaRodjenih/',
    postPayload);
  }

  deleteKorisnik(jmbg: string): Observable<MaticnaKnjigaRodjenih> {
    return this.http.delete<MaticnaKnjigaRodjenih>('http://localhost:8082/api/maticar/maticnaKnjigaRodjenih/' + jmbg);
  }
}
