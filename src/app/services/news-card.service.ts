import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsCard } from '../models/news-card';
import { Observable, map } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsCardService {

  baseUrl = environment.baseUrl
  apiURL = `${this.baseUrl}news_card`
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

    return this.http.put(`${this.baseUrl}news_card`, data, httpOptions);
  }

}
