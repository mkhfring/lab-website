import { News } from '../models/news';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiURL = 'http://127.0.0.1:5001/apiv1/list_news'
  constructor(private http: HttpClient) { }
  get_lab(): Observable<News[]>{
    return this.http.get<{id: number, body: string}[]>(`${this.apiURL}`) // Replace with your endpoint
      .pipe(
        map(dataArray => dataArray.map(data => new News(data.id, data.body)))
      );
  }
}
