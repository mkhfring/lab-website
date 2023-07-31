import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lab } from '../models/lab';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LabService {
  apiURL = 'http://127.0.0.1:5001/apiv1/lab'
  requestMessage= ''
  constructor(private http:HttpClient, private auth:AuthService) { }

  get_lab(): Observable<Lab>{
    return this.http.get<{summary: string, title:string}>(`${this.apiURL}`) 
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

    return this.http.put('http://localhost:5001/apiv1/lab', data, httpOptions);
  }
}
