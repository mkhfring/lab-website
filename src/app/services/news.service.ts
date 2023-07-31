import { News } from '../models/news';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseUrl = environment.baseUrl
  apiURL = `${this.baseUrl}list_news`
  constructor(private http: HttpClient) { }
  get_lab(): Observable<News[]>{
    return this.http.get<{id: number, body: string}[]>(`${this.apiURL}`) // Replace with your endpoint
      .pipe(
        map(dataArray => dataArray.map(data => new News(data.id, data.body)))
      );
  }
}
