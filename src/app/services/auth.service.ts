import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  apiUrl = environment.baseUrlAuth;
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  constructor(private http : HttpClient) { }
  login({email, password}: any): void{
    this.http.post(this.apiUrl, {email:email, password:password}, { observe: 'response' }).subscribe(
      (res: HttpResponse<any>) => {
        if(res.status == 200 && res.body.hasOwnProperty('access_token')){
          this.token = res.body.access_token;
          if (this.token){this.setToken(this.token)}
          this.isLoggedInSubject.next(true);
        }
      },
      (err) => console.error(err)
    )
  }
  logout(): void{
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
  }
  isLogin():boolean{
    return this.getToken()!=null
  }
  setToken(token:string):void{
    localStorage.setItem('token', token)
  }
  getToken(): string|null{
    return localStorage.getItem('token');
  }

}
