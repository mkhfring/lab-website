import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lab } from '../models/lab';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  baseURL = environment.baseUrl;
  requestMessage= ''
  constructor(private http:HttpClient, private auth:AuthService) { }

  get_lab(): Observable<Lab>{
    console.log(`this is ${this.baseURL}`);
    return this.http.get<{summary: string, title:string}>(`${this.baseURL}lab`) 
      .pipe(
        map(data => new Lab(data.summary, data.title))
      );
  }
  edit_lab(title: string, summary: string): Observable<any>{
    const data = {
      title: title,
      summary: summary
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    };

    return this.http.put(`${this.baseURL}lab`, data, httpOptions);
  }
}
