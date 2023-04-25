import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../service/NewsService';

@Component({
  selector: 'app-katastar-home',
  templateUrl: './katastar-home.component.html',
  styleUrls: ['./katastar-home.component.css']
})
export class KatastarHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
  }

}
