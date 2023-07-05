export class MaticnaKnjigaVencanih {
  id?: number;
  imeZene: string;
  prezimeZene: string;  
  imeMuza: string;
  prezimeMuza: string;
  jmbgZene: string;
  jmbgMuza: string;
  danMesecIGodinaZakljucenjaBraka: string;
  adresaPrebivalistaZene: string;
  adresaPrebivalistaMuza: string;
  drzavljanstvoZene: string;
  drzavljanstvoMuza: string;
  imeSvedoka1: string;
  prezimeSvedoka1: string;
  imeSvedoka2: string;
  prezimeSvedoka2: string;

  constructor(imeZene: string, prezimeZene: string, imeMuza: string, prezimeMuza: string, jmbgZene: string, jmbgMuza: string, danMesecIGodinaZakljucenjaBraka: string, adresaPrebivalistaZene: string, adresaPrebivalistaMuza: string, drzavljanstvoZene: string, drzavljanstvoMuza: string, imeSvedoka1: string, prezimeSvedoka1: string, imeSvedoka2: string, prezimeSvedoka2: string) {
    this.imeZene = imeZene;
    this.prezimeZene = prezimeZene;
    this.imeMuza = imeMuza;
    this.prezimeMuza = prezimeMuza;
    this.jmbgZene = jmbgZene;
    this.jmbgMuza = jmbgMuza;
    this.danMesecIGodinaZakljucenjaBraka = danMesecIGodinaZakljucenjaBraka;
    this.adresaPrebivalistaZene = adresaPrebivalistaZene;
    this.adresaPrebivalistaMuza = adresaPrebivalistaMuza;
    this.drzavljanstvoZene = drzavljanstvoZene;
    this.drzavljanstvoMuza = drzavljanstvoMuza;
    this.imeSvedoka1 = imeSvedoka1;
    this.prezimeSvedoka1 = prezimeSvedoka1;
    this.imeSvedoka2 = imeSvedoka2;
    this.prezimeSvedoka2 = prezimeSvedoka2;
}
}