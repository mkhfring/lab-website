import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/models/news';
import { NewsCardService } from 'src/app/services/news-card.service';
import { NewsCard } from 'src/app/models/news-card';
import { LabService } from 'src/app/services/lab.service';
import { Lab } from 'src/app/models/lab';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  newsList: News[] = []
  newCard!: NewsCard;
  lab!:Lab;
  
  constructor(private news:NewsService, private newscard:NewsCardService, private labservice:LabService) { }

  ngOnInit(): void {
    this.news.get_lab().subscribe( 
      res=>{
        this.newsList = res
      }
    );
    this.newscard.get_newsCard().subscribe(
      res=>{
        console.log(res)
        this.newCard = res
      }
    );
    this.labservice.get_lab().subscribe(
      res=>{
        console.log(res)
        this.lab = res
      }
    );

  }

}
