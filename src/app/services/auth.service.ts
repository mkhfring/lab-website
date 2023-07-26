import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;

  constructor(private http : HttpClient) { }
  login({email, password}: any): void{
    this.http.post('http://127.0.0.1:5001/auth/login', {email:email, password:password}, { observe: 'response' }).subscribe(
      (res: HttpResponse<any>) => {
        if(res.status == 200 && res.body.hasOwnProperty('access_token')){
          this.token = res.body.access_token;
          if (this.token){this.setToken(this.token)}
        }
      },
      (err) => console.error(err)
    )
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
