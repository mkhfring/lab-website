import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription;
  isLogin:Boolean = false;
  constructor(private auth:AuthService, private router:Router) { }

  logout():void{
    this.auth.logout();
    this.router.navigate(['home'])
  }
  ngOnInit(): void {
    this.subscription = this.auth.isLoggedIn$.subscribe(
      isLoggedIn => {
        this.isLogin= isLoggedIn;
      }
    );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
