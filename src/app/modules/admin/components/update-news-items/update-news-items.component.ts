import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-news-items',
  templateUrl: './update-news-items.component.html',
  styleUrls: ['./update-news-items.component.css']
})
export class UpdateNewsItemsComponent implements OnInit {

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
