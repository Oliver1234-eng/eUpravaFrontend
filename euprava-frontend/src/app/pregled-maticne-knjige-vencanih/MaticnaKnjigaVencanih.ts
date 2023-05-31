export class MaticnaKnjigaVencanih {
    
  jmbgMuza: string;
  imeMuza: string;
  prezimeMuza: string;
  jmbgZene: string;
  imeZene: string;
  prezimeZene: string;
  datumZakljucenjaBraka: string;

  constructor(jmbgMuza: string, imeMuza: string, prezimeMuza: string, jmbgZene: string, imeZene: string,
      prezimeZene: string, datumZakljucenjaBraka: string) {
    this.jmbgMuza = jmbgMuza;
    this.imeMuza = imeMuza;
    this.prezimeMuza = prezimeMuza;
    this.jmbgZene = jmbgZene;
    this.imeZene = imeZene;
    this.prezimeZene = prezimeZene;
    this.datumZakljucenjaBraka = datumZakljucenjaBraka;
  }
}