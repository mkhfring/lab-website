import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-lab',
  templateUrl: './update-lab.component.html',
  styleUrls: ['./update-lab.component.css']
})
export class UpdateLabComponent implements OnInit {

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
