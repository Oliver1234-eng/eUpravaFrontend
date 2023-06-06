import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prikaz-termina-gradjanin',
  templateUrl: './prikaz-termina-gradjanin.component.html',
  styleUrls: ['./prikaz-termina-gradjanin.component.css']
})
export class PrikazTerminaGradjaninComponent implements OnInit {

  termini: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/termin/all/').subscribe(
      data => {
        this.termini = data;
        console.log(data)
      },
      error => {
        console.error(error);
      }
    );
  }

  rezervisiTermin() {
    this.router.navigate(['/rezervacija-termina-gradjanin']);
  }

}
