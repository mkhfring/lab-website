import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsCard } from '../models/news-card';
import { Observable, map } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class NewsCardService {
  apiURL = 'http://127.0.0.1:5001/apiv1/news_card'
  constructor(private http:HttpClient) { }

  get_newsCard(): Observable<NewsCard>{
    return this.http.get<{title: string}>(`${this.apiURL}`) 
      .pipe(
        map(data=> new NewsCard(data.title))
      );
  }

}
