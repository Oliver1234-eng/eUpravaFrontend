import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provera-gradjanina-notar',
  templateUrl: './provera-gradjanina-notar.component.html',
  styleUrls: ['./provera-gradjanina-notar.component.css']
})
export class ProveraGradjaninaNotarComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  maticnaKnjigaRodjenih() {
    this.router.navigate(['/prikaz-maticne-knjige-rodjenih-notar']);
  }

  maticnaKnjigaVencanih() {
    this.router.navigate(['/prikaz-maticne-knjige-vencanih-notar']);
  }

  maticnaKnjigaUmrlih() {
    this.router.navigate(['/prikaz-maticne-knjige-umrlih-notar']);
  }

}
