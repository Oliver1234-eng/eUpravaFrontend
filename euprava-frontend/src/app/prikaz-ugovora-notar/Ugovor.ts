export class Ugovor {
    
    idNotara: number;
    jmbgNotara: string;
    imeNotara: string;
    prezimeNotara: string;
    polNotara: string;
    datumRodjenjaNotara: string;
    // mestoRodjenjaNotara: string;
    // imeRoditeljaNotara: string;
    // adresaNotara: string;
    korisnickoImeNotara: string;
    // emailNotara: string;
    // brojTelefonaNotara: string;
    vrstaUgovora: string;
    datumOvereUgovora: string;
    overen: string;

    constructor(idNotara: number, jmbgNotara: string, imeNotara: string, prezimeNotara: string,
        polNotara: string, datumRodjenjaNotara: string, korisnickoImeNotara: string,
        vrstaUgovora: string, datumOvereUgovora: string, overen: string) {
      this.idNotara = idNotara;
      this.jmbgNotara = jmbgNotara;
      this.imeNotara = imeNotara;
      this.prezimeNotara = prezimeNotara;
      this.polNotara = polNotara;
      this.datumRodjenjaNotara = datumRodjenjaNotara;
      this.korisnickoImeNotara = korisnickoImeNotara;
      this.vrstaUgovora = vrstaUgovora;
      this.datumOvereUgovora = datumOvereUgovora;
      this.overen = overen;
    }
}