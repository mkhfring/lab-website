import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lab } from '../models/lab';

@Injectable({
  providedIn: 'root'
})
export class LabService {
  apiURL = 'http://127.0.0.1:5001/apiv1/lab'
  constructor(private http:HttpClient) { }

  get_lab(): Observable<Lab>{
    return this.http.get<{summary: string, title:string}>(`${this.apiURL}`) 
      .pipe(
        map(data => new Lab(data.summary, data.title))
      );
  }
}
