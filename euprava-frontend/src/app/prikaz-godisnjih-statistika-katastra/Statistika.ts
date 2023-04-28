export class Statistika {
    
    godina: number;
    podnetiZahtevi: number;
    reseniZahtevi: number;
    procenatDrugostepenihZalbi: number;
    registrovaneParcele: number;
    upisanaPravaNaParcelama: number;
    vrednostUpisanihPrava: number;
    zahteviZaPromenuVlasnistva: number;
    izdavanjePotvrda: number;
    upotrebaElektronskihServisa: number;
  
    constructor(godina: number, podnetiZahtevi: number, reseniZahtevi: number, procenatDrugostepenihZalbi: number,
      registrovaneParcele: number, upisanaPravaNaParcelama: number, vrednostUpisanihPrava: number,
      zahteviZaPromenuVlasnistva: number, izdavanjePotvrda: number, upotrebaElektronskihServisa: number) {
      this.godina = godina;
      this.podnetiZahtevi = podnetiZahtevi;
      this.reseniZahtevi = reseniZahtevi;
      this.procenatDrugostepenihZalbi = procenatDrugostepenihZalbi;
      this.registrovaneParcele = registrovaneParcele;
      this.upisanaPravaNaParcelama = upisanaPravaNaParcelama;
      this.vrednostUpisanihPrava = vrednostUpisanihPrava;
      this.zahteviZaPromenuVlasnistva = zahteviZaPromenuVlasnistva;
      this.izdavanjePotvrda = izdavanjePotvrda;
      this.upotrebaElektronskihServisa = upotrebaElektronskihServisa;
    }
}