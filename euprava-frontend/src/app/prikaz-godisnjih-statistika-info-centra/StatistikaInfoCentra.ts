export class StatistikaInfoCentra {
    
    godina: number;
    kolikoPutaOdgovoriliNaPoziv: number;
    prosecnoVremeOdgovoraNaPoziv: number;
    kolikoPutaOdgovoriliNaMejl: number;
    kolikoPutaCetovali: number;
    kolikoPutaKorisnicimaZakazaliTerminZaPredajuZahtevaPutemAplikacijeEZakazivanje: number;
    kolikoPutaKorisnicimaOmoguciliObracanjePutemAplikacijeEPrimedbe: number;
  
    constructor(godina: number, kolikoPutaOdgovoriliNaPoziv: number, prosecnoVremeOdgovoraNaPoziv: number,
        kolikoPutaOdgovoriliNaMejl: number, kolikoPutaCetovali: number,
        kolikoPutaKorisnicimaZakazaliTerminZaPredajuZahtevaPutemAplikacijeEZakazivanje: number, 
        kolikoPutaKorisnicimaOmoguciliObracanjePutemAplikacijeEPrimedbe: number) {
      this.godina = godina;
      this.kolikoPutaOdgovoriliNaPoziv = kolikoPutaOdgovoriliNaPoziv;
      this.prosecnoVremeOdgovoraNaPoziv = prosecnoVremeOdgovoraNaPoziv;
      this.kolikoPutaOdgovoriliNaMejl = kolikoPutaOdgovoriliNaMejl;
      this.kolikoPutaCetovali = kolikoPutaCetovali;
      this.kolikoPutaKorisnicimaZakazaliTerminZaPredajuZahtevaPutemAplikacijeEZakazivanje = kolikoPutaKorisnicimaZakazaliTerminZaPredajuZahtevaPutemAplikacijeEZakazivanje;
      this.kolikoPutaKorisnicimaOmoguciliObracanjePutemAplikacijeEPrimedbe = kolikoPutaKorisnicimaOmoguciliObracanjePutemAplikacijeEPrimedbe;
    }
}