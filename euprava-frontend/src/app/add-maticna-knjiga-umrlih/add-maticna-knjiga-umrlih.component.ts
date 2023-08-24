import { Component, OnInit } from '@angular/core';
import { MaticnaKnjigaUmrlih } from '../pregled-maticne-knjige-umrlih/MaticnaKnjigaUmrlih';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaticarService } from '../maticar.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-add-maticna-knjiga-umrlih',
  templateUrl: './add-maticna-knjiga-umrlih.component.html',
  styleUrls: ['./add-maticna-knjiga-umrlih.component.css']
})
export class AddMaticnaKnjigaUmrlihComponent implements OnInit {
  createMaticnaKnjigaForm: FormGroup;
  maticnaKnjigaUmrlihModel: MaticnaKnjigaUmrlih;
  jmbg = new FormControl('');
  ime = new FormControl('');
  prezime = new FormControl('');
  adresaRodjenja = new FormControl('');
  imeOca = new FormControl('');
  prezimeOca = new FormControl('');
  zanimanjeOca = new FormControl('');
  imeMajke = new FormControl('');
  prezimeMajke = new FormControl('');
  zanimanjeMajke = new FormControl('');
  drzavljanstvo = new FormControl('');
  jmbgOca = new FormControl('');
  jmbgMajke = new FormControl('');
  danMesecIGodinaSmrti = new FormControl('');
  casSmrti = new FormControl('');

  constructor(private router: Router, private maticarService: MaticarService) {
    this.createMaticnaKnjigaForm = new FormGroup({
      jmbg: new FormControl('', Validators.required),
      ime: new FormControl('', Validators.required),
      prezime: new FormControl('', Validators.required),
      adresaRodjenja: new FormControl('', Validators.required),
      imeOca: new FormControl('', Validators.required),
      prezimeOca: new FormControl('', Validators.required),
      zanimanjeOca: new FormControl('', Validators.required),
      imeMajke: new FormControl('', Validators.required),
      prezimeMajke: new FormControl('', Validators.required),
      zanimanjeMajke: new FormControl('', Validators.required),
      drzavljanstvo: new FormControl('', Validators.required),
      jmbgOca: new FormControl('', Validators.required),
      jmbgMajke: new FormControl('', Validators.required),
      danMesecIGodinaSmrti: new FormControl('', Validators.required),
      casSmrti: new FormControl('', Validators.required)
    });
    this.maticnaKnjigaUmrlihModel = {
      jmbg: '',
      ime: '',
      prezime: '',
      adresaRodjenja: '',
      imeOca: '',
      prezimeOca: '',
      zanimanjeOca: '',
      imeMajke: '',
      prezimeMajke: '',
      zanimanjeMajke: '',
      drzavljanstvo: '',
      jmbgOca: '',
      jmbgMajke: '',
      danMesecIGodinaSmrti: '',
      casSmrti: ''
    };
   }

  ngOnInit(): void {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createKnjiga() {
    this.maticnaKnjigaUmrlihModel.jmbg = this.createMaticnaKnjigaForm.get('jmbg').value;
    this.maticnaKnjigaUmrlihModel.ime = this.createMaticnaKnjigaForm.get('ime').value;
    this.maticnaKnjigaUmrlihModel.prezime = this.createMaticnaKnjigaForm.get('prezime').value;
    this.maticnaKnjigaUmrlihModel.adresaRodjenja = this.createMaticnaKnjigaForm.get('adresaRodjenja').value;
    this.maticnaKnjigaUmrlihModel.imeOca = this.createMaticnaKnjigaForm.get('imeOca').value;
    this.maticnaKnjigaUmrlihModel.prezimeOca = this.createMaticnaKnjigaForm.get('prezimeOca').value;
    this.maticnaKnjigaUmrlihModel.zanimanjeOca = this.createMaticnaKnjigaForm.get('zanimanjeOca').value;
    this.maticnaKnjigaUmrlihModel.imeMajke = this.createMaticnaKnjigaForm.get('imeMajke').value;
    this.maticnaKnjigaUmrlihModel.prezimeMajke = this.createMaticnaKnjigaForm.get('prezimeMajke').value;
    this.maticnaKnjigaUmrlihModel.zanimanjeMajke = this.createMaticnaKnjigaForm.get('zanimanjeMajke').value;
    this.maticnaKnjigaUmrlihModel.drzavljanstvo = this.createMaticnaKnjigaForm.get('drzavljanstvo').value;
    this.maticnaKnjigaUmrlihModel.jmbgOca = this.createMaticnaKnjigaForm.get('jmbgOca').value;
    this.maticnaKnjigaUmrlihModel.jmbgMajke = this.createMaticnaKnjigaForm.get('jmbgMajke').value;
    this.maticnaKnjigaUmrlihModel.danMesecIGodinaSmrti = this.createMaticnaKnjigaForm.get('danMesecIGodinaSmrti').value;
    this.maticnaKnjigaUmrlihModel.casSmrti = this.createMaticnaKnjigaForm.get('casSmrti').value;
  
    this.maticarService.createMaticnaKnjigaUmrlih(this.maticnaKnjigaUmrlihModel).subscribe(data => {
      this.router.navigateByUrl('/pregled-maticne-knjige-umrlih');
    }, error => {
      throwError(error);
    });
  }

}
