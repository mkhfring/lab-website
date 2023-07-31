import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsCard } from '../models/news-card';
import { Observable, map } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NewsCardService {
  apiURL = 'http://127.0.0.1:5001/apiv1/news_card'
  constructor(private http:HttpClient, private auth:AuthService) { }

  get_newsCard(): Observable<NewsCard>{
    return this.http.get<{title: string}>(`${this.apiURL}`) 
      .pipe(
        map(data=> new NewsCard(data.title))
      );
  }
  edit_card(title: string): Observable<any>{
    const data = {
      title: title,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    };

    return this.http.put('http://localhost:5001/apiv1/news_card', data, httpOptions);
  }

}
