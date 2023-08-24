import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { terminDTO } from '../model/overaDTO.model';
import { notarDTO } from '../model/notarDTO.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-gradjanin-notar-zakazivanje',
  templateUrl: './gradjanin-notar-zakazivanje.component.html',
  styleUrls: ['./gradjanin-notar-zakazivanje.component.css']
})
export class GradjaninNotarZakazivanjeComponent implements OnInit {

  form: FormGroup;
 slobodniTermini: Time[] = [];
 notari: notarDTO[] = [];
 terminDTO!:terminDTO;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,

  ) {  
    this.terminDTO = {
      notar_id : 0,
      kancelarija_id : 0,
      datumIvremeSastanka : null,
      overenUgovor : false,
      statusTermina : "NA_CEKANJU",
      stranka_ids : [],
      svedok_ids : [],
      ugovor_id :0,
      vremeTrajanja : 30,
      vrstaUgovora : "OVERA_POTPISA"

    }}

  ngOnInit(): void {
    this.getNotari();
    this.form = this.formBuilder.group({
      notarControl: [''],
      datumControl: [''],
    });
  }

	odabraniNotar = '';
	onSelectedNotar(value:string): void {
		this.odabraniNotar = value;
    this.terminDTO.notar_id = 1;
	}
  odabraniTermin = '';
	onSelectedTermin(value:string): void {
		this.odabraniTermin = value;
    this.terminDTO.datumIvremeSastanka = value;
	}

  getNotari(): void {
    this.http.get<any>(`http://localhost:8080/api/notar/all/`).subscribe(notari=> this.notari=notari)
  }

  onSubmit(){
    console.log(this.terminDTO)
    return this.http.get<any>(`http://localhost:8080/api/termin/slobodniTermini`,).subscribe(
      slobodniTermini => {this.slobodniTermini = slobodniTermini; console.log(this.slobodniTermini) }
     
    )
  }

}
