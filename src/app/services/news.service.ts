import { News } from '../models/news';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseUrl = environment.baseUrl
  apiURL = `${this.baseUrl}list_news`
  editNewsId = 0;
  constructor(private http: HttpClient, private auth:AuthService) { }
  get_lab(): Observable<News[]>{
    return this.http.get<{id: number, body: string}[]>(`${this.apiURL}`) // Replace with your endpoint
      .pipe(
        map(dataArray => dataArray.map(data => new News(data.id, data.body)))
      );
  }
  set_news_id(id:number):void{
    this.editNewsId = id;

  }
  delete_news_by_id(id:number): Observable<News>{
    const data = {
      id:id
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    };
    return this.http.post<{id: number, body:string}>(`${this.baseUrl}delete_news`,data, httpOptions);
  }
  addNews(body:string): Observable<News>{
    const data = {
      body:body
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    };
    return this.http.post<{id:number, body:string}>(`${this.baseUrl}add_news`,data, httpOptions)
  }
}
