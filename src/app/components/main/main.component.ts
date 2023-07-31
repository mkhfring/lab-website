import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  newsList: News[] = []
  constructor(private news:NewsService) { }

  ngOnInit(): void {
    this.news.get_lab().subscribe( 
      res=>{
        this.newsList = res
      }
    );
  }

}
