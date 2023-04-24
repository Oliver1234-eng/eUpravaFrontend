import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../service/NewsService';

@Component({
  selector: 'app-katastar-news',
  templateUrl: './katastar-news.component.html',
  styleUrls: ['./katastar-news.component.css']
})
export class KatastarNewsComponent implements OnInit {

  naslov: string;
  tekst: string;

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    const index = +this.route.snapshot.paramMap.get('id');
    const vest = this.newsService.getVest(index);
    this.naslov = vest.naslov;
    this.tekst = vest.tekst;
  }

}
