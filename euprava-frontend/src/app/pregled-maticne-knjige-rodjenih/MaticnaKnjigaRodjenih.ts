export class MaticnaKnjigaRodjenih {
    
    jmbg: string;
    ime: string;
    prezime: string;
    adresaRodjenja: string;
    imeOca: string;
    prezimeOca: string;
    zanimanjeOca: string;
    imeMajke: string;
    prezimeMajke: string;
    zanimanjeMajke: string;
    drzavljanstvo: string;
    jmbgOca: string;
    jmbgMajke: string;
    mestoIOpstinaRodjenja: string;
    drzavaRodjenja: string;
    danMesecGodinaIVremeRodjenja: string;
    roditelji: string;
    deca: string;
  
    constructor(jmbg: string, ime: string, prezime: string, adresaRodjenja: string,
        imeOca: string, prezimeOca: string, zanimanjeOca: string,
        imeMajke: string, prezimeMajke: string, zanimanjeMajke: string,
        drzavljanstvo: string, jmbgOca: string, jmbgMajke: string,
        mestoIOpstinaRodjenja: string, drzavaRodjenja: string, danMesecGodinaIVremeRodjenja: string,
        roditelji: string, deca: string) {
      this.jmbg = jmbg;
      this.ime = ime;
      this.prezime = prezime;
      this.adresaRodjenja = adresaRodjenja;
      this.imeOca = imeOca;
      this.prezimeOca = prezimeOca;
      this.zanimanjeOca = zanimanjeOca;
      this.imeMajke = imeMajke;
      this.prezimeMajke = prezimeMajke;
      this.zanimanjeMajke = zanimanjeMajke;
      this.drzavljanstvo = drzavljanstvo;
      this.jmbgOca = jmbgOca;
      this.jmbgMajke = jmbgMajke;
      this.mestoIOpstinaRodjenja = mestoIOpstinaRodjenja;
      this.drzavaRodjenja = drzavaRodjenja;
      this.danMesecGodinaIVremeRodjenja = danMesecGodinaIVremeRodjenja;
      this.roditelji = roditelji;
      this.deca = deca;
    }
}