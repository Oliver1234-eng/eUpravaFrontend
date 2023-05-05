export class Termin {
    
    idTermina: number;
    datumIVremeSastanka: string;
    vremeTrajanja: string;
    vrstaUgovora: string;
    statusTermina: string;
    overen: string;

    constructor(idTermina: number, datumIVremeSastanka: string, vremeTrajanja: string, vrstaUgovora: string,
        statusTermina: string, overen: string) {
      this.idTermina = idTermina;
      this.datumIVremeSastanka = datumIVremeSastanka;
      this.vremeTrajanja = vremeTrajanja;
      this.vrstaUgovora = vrstaUgovora;
      this.statusTermina = statusTermina;
      this.overen = overen;
    }
}