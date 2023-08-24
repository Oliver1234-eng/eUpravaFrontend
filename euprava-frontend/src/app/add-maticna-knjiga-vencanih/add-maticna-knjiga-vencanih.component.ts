import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { MaticarService } from '../maticar.service';
import { MaticnaKnjigaVencanih } from '../pregled-maticne-knjige-vencanih/MaticnaKnjigaVencanih';

@Component({
  selector: 'app-add-maticna-knjiga-vencanih',
  templateUrl: './add-maticna-knjiga-vencanih.component.html',
  styleUrls: ['./add-maticna-knjiga-vencanih.component.css']
})
export class AddMaticnaKnjigaVencanihComponent implements OnInit {

  createMaticnaKnjigaForm: FormGroup;
  maticnaKnjigaVencanihModel: MaticnaKnjigaVencanih;
  imeZene = new FormControl('');
  prezimeZene = new FormControl('');
  imeMuza = new FormControl('');
  prezimeMuza = new FormControl('');
  jmbgZene = new FormControl('');
  jmbgMuza = new FormControl('');
  danMesecIGodinaZakljucenjaBraka = new FormControl('');
  adresaPrebivalistaZene = new FormControl('');
  adresaPrebivalistaMuza = new FormControl('');
  drzavljanstvoZene = new FormControl('');
  drzavljanstvoMuza = new FormControl('');
  imeSvedoka1 = new FormControl('');
  prezimeSvedoka1 = new FormControl('');
  imeSvedoka2 = new FormControl('');
  prezimeSvedoka2 = new FormControl('');

  constructor(private router: Router, private maticarService: MaticarService) {
    this.createMaticnaKnjigaForm = new FormGroup({
      imeZene: new FormControl('', Validators.required),
      prezimeZene: new FormControl('', Validators.required),
      imeMuza: new FormControl('', Validators.required),
      prezimeMuza: new FormControl('', Validators.required),
      jmbgZene: new FormControl('', Validators.required),
      jmbgMuza: new FormControl('', Validators.required),
      danMesecIGodinaZakljucenjaBraka: new FormControl('', Validators.required),
      adresaPrebivalistaZene: new FormControl('', Validators.required),
      adresaPrebivalistaMuza: new FormControl('', Validators.required),
      drzavljanstvoZene: new FormControl('', Validators.required),
      drzavljanstvoMuza: new FormControl('', Validators.required),
      imeSvedoka1: new FormControl('', Validators.required),
      prezimeSvedoka1: new FormControl('', Validators.required),
      imeSvedoka2: new FormControl('', Validators.required),
      prezimeSvedoka2: new FormControl('', Validators.required)
    });
    this.maticnaKnjigaVencanihModel = {
      imeZene: '',
      prezimeZene: '',
      imeMuza: '',
      prezimeMuza: '',
      jmbgZene: '',
      jmbgMuza: '',
      danMesecIGodinaZakljucenjaBraka: '',
      adresaPrebivalistaZene: '',
      adresaPrebivalistaMuza: '',
      drzavljanstvoZene: '',
      drzavljanstvoMuza: '',
      imeSvedoka1: '',
      prezimeSvedoka1: '',
      imeSvedoka2: '',
      prezimeSvedoka2: ''
    };
  }

  ngOnInit(): void {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createKnjiga() {
    this.maticnaKnjigaVencanihModel.imeZene = this.createMaticnaKnjigaForm.get('imeZene').value;
    this.maticnaKnjigaVencanihModel.prezimeZene = this.createMaticnaKnjigaForm.get('prezimeZene').value;
    this.maticnaKnjigaVencanihModel.imeMuza = this.createMaticnaKnjigaForm.get('imeMuza').value;
    this.maticnaKnjigaVencanihModel.prezimeMuza = this.createMaticnaKnjigaForm.get('prezimeMuza').value;
    this.maticnaKnjigaVencanihModel.jmbgZene = this.createMaticnaKnjigaForm.get('jmbgZene').value;
    this.maticnaKnjigaVencanihModel.jmbgMuza = this.createMaticnaKnjigaForm.get('jmbgMuza').value;
    this.maticnaKnjigaVencanihModel.danMesecIGodinaZakljucenjaBraka = this.createMaticnaKnjigaForm.get('danMesecIGodinaZakljucenjaBraka').value;
    this.maticnaKnjigaVencanihModel.adresaPrebivalistaZene = this.createMaticnaKnjigaForm.get('adresaPrebivalistaZene').value;
    this.maticnaKnjigaVencanihModel.adresaPrebivalistaMuza = this.createMaticnaKnjigaForm.get('adresaPrebivalistaMuza').value;
    this.maticnaKnjigaVencanihModel.drzavljanstvoZene = this.createMaticnaKnjigaForm.get('drzavljanstvoZene').value;
    this.maticnaKnjigaVencanihModel.drzavljanstvoMuza = this.createMaticnaKnjigaForm.get('drzavljanstvoMuza').value;
    this.maticnaKnjigaVencanihModel.imeSvedoka1 = this.createMaticnaKnjigaForm.get('imeSvedoka1').value;
    this.maticnaKnjigaVencanihModel.prezimeSvedoka1 = this.createMaticnaKnjigaForm.get('prezimeSvedoka1').value;
    this.maticnaKnjigaVencanihModel.imeSvedoka2 = this.createMaticnaKnjigaForm.get('imeSvedoka2').value;
    this.maticnaKnjigaVencanihModel.prezimeSvedoka2 = this.createMaticnaKnjigaForm.get('prezimeSvedoka2').value;
    
    this.maticarService.createMaticnaKnjigaVencanih(this.maticnaKnjigaVencanihModel).subscribe(data => {
      this.router.navigateByUrl('/pregled-maticne-knjige-vencanih');
    }, error => {
      throwError(error);
    });
  }
}
