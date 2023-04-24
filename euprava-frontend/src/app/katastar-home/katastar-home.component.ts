import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../service/NewsService';

@Component({
  selector: 'app-katastar-home',
  templateUrl: './katastar-home.component.html',
  styleUrls: ['./katastar-home.component.css']
})
export class KatastarHomeComponent implements OnInit {

  // vesti = [
  //   {
  //     naslov: 'Najava: Izmena zakona o katastru nepokretnosti',
  //     opis: 'Ministarstvo poljoprivrede, šumarstva i vodoprivrede najavilo je izmene Zakona o katastru nepokretnosti...'
  //   },
  //   {
  //     naslov: 'Nove mogućnosti u elektronskom katastru',
  //     opis: 'Elektronski katastar omogućava sada i pregledanje i preuzimanje katastarskih planova...'
  //   },
  //   {
  //     naslov: 'Održana obuka za katastarske službenike',
  //     opis: 'U organizaciji Republičkog geodetskog zavoda održana je dvodnevna obuka za katastarske službenike...'
  //   }
  // ];

  vesti: any[];

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    this.vesti = this.newsService.getVesti();
  }

}
