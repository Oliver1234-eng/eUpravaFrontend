import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaticnaKnjigaRodjenih } from '../pregled-maticne-knjige-rodjenih/MaticnaKnjigaRodjenih';
import { Router } from '@angular/router';
import { MaticarService } from '../maticar.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-add-maticna-knjiga-rodjenih',
  templateUrl: './add-maticna-knjiga-rodjenih.component.html',
  styleUrls: ['./add-maticna-knjiga-rodjenih.component.css']
})
export class AddMaticnaKnjigaRodjenihComponent implements OnInit {
  createMaticnaKnjigaForm: FormGroup;
  maticnaKnjigaRodjenihModel: MaticnaKnjigaRodjenih;
  jmbg= new FormControl('');
  ime= new FormControl('');
  prezime= new FormControl('');
  adresaRodjenja= new FormControl('');
  imeOca= new FormControl('');
  prezimeOca= new FormControl('');
  zanimanjeOca= new FormControl('');
  imeMajke= new FormControl('');
  prezimeMajke= new FormControl('');
  zanimanjeMajke= new FormControl('');
  drzavljanstvo= new FormControl('');
  jmbgOca= new FormControl('');
  jmbgMajke= new FormControl('');
  mestoIOpstinaRodjenja= new FormControl('');
  drzavaRodjenja= new FormControl('');
  danMesecGodinaIVremeRodjenja= new FormControl('');
  roditelji= new FormControl('');
  deca= new FormControl('');

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
      mestoIOpstinaRodjenja: new FormControl('', Validators.required),
      drzavaRodjenja: new FormControl('', Validators.required),
      danMesecGodinaIVremeRodjenja: new FormControl('', Validators.required),
      roditelji: new FormControl('', Validators.required),
      deca: new FormControl('', Validators.required)
    });
    this.maticnaKnjigaRodjenihModel = {
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
      mestoIOpstinaRodjenja: '',
      drzavaRodjenja: '',
      danMesecGodinaIVremeRodjenja: '',
      roditelji: '',
      deca: ''
    }
   }

  ngOnInit(): void {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createKnjiga() {
    this.maticnaKnjigaRodjenihModel.jmbg = this.createMaticnaKnjigaForm.get('jmbg').value;
    this.maticnaKnjigaRodjenihModel.ime = this.createMaticnaKnjigaForm.get('ime').value;
    this.maticnaKnjigaRodjenihModel.prezime = this.createMaticnaKnjigaForm.get('prezime').value;
    this.maticnaKnjigaRodjenihModel.adresaRodjenja = this.createMaticnaKnjigaForm.get('adresaRodjenja').value;
    this.maticnaKnjigaRodjenihModel.imeOca = this.createMaticnaKnjigaForm.get('imeOca').value;
    this.maticnaKnjigaRodjenihModel.prezimeOca = this.createMaticnaKnjigaForm.get('prezimeOca').value;
    this.maticnaKnjigaRodjenihModel.zanimanjeOca = this.createMaticnaKnjigaForm.get('zanimanjeOca').value;
    this.maticnaKnjigaRodjenihModel.imeMajke = this.createMaticnaKnjigaForm.get('imeMajke').value;
    this.maticnaKnjigaRodjenihModel.prezimeMajke = this.createMaticnaKnjigaForm.get('prezimeMajke').value;
    this.maticnaKnjigaRodjenihModel.zanimanjeMajke = this.createMaticnaKnjigaForm.get('zanimanjeMajke').value;
    this.maticnaKnjigaRodjenihModel.drzavljanstvo = this.createMaticnaKnjigaForm.get('drzavljanstvo').value;
    this.maticnaKnjigaRodjenihModel.jmbgOca = this.createMaticnaKnjigaForm.get('jmbgOca').value;
    this.maticnaKnjigaRodjenihModel.jmbgMajke = this.createMaticnaKnjigaForm.get('jmbgMajke').value;
    this.maticnaKnjigaRodjenihModel.mestoIOpstinaRodjenja = this.createMaticnaKnjigaForm.get('mestoIOpstinaRodjenja').value;
    this.maticnaKnjigaRodjenihModel.drzavaRodjenja = this.createMaticnaKnjigaForm.get('drzavaRodjenja').value;
    this.maticnaKnjigaRodjenihModel.danMesecGodinaIVremeRodjenja = this.createMaticnaKnjigaForm.get('danMesecGodinaIVremeRodjenja').value;
    this.maticnaKnjigaRodjenihModel.roditelji = this.createMaticnaKnjigaForm.get('roditelji').value;
    this.maticnaKnjigaRodjenihModel.deca = this.createMaticnaKnjigaForm.get('deca').value;
    this.maticarService.createMaticnaKnjigaRodjenih(this.maticnaKnjigaRodjenihModel).subscribe(data => {
      this.router.navigateByUrl('/pregled-maticne-knjige-rodjenih');
    }, error => {
      throwError(error);
    })
  }

}
