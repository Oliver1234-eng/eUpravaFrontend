export class NewsService {
  
    private vesti = [
      {
        naslov: "Vest 1",
        opis: "Opis vesti 1",
        tekst: "Tekst vesti 1"
      },
      {
        naslov: "Vest 2",
        opis: "Opis vesti 2",
        tekst: "Tekst vesti 2"
      },
      {
        naslov: "Vest 3",
        opis: "Opis vesti 3",
        tekst: "Tekst vesti 3"
      }
    ];
  
    getVesti() {
      return this.vesti;
    }
  
    getVest(index: number) {
      return this.vesti[index];
    }
}