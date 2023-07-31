import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-news-card',
  templateUrl: './update-news-card.component.html',
  styleUrls: ['./update-news-card.component.css']
})
export class UpdateNewsCardComponent implements OnInit {

  newsCardForm = new FormGroup({
    title: new FormControl(''),
  });

  constructor(private auth:AuthService, private router:Router) { }

  
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.newsCardForm.value);
  }

}
