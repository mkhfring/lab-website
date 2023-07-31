import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  loginForm = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl('')
    }
  )
  constructor(private auth:AuthService, private router:Router) { }

  
  ngOnInit(): void {
  }
  onSubmit(): void{
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value);
      if(this.auth.isLogin()){
        console.log('User is login');
        this.router.navigate(['admin']);

      }
      else{
        console.log('login failed');
      }
    }
    
  }

}
