import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NewsCardService } from 'src/app/services/news-card.service';

@Component({
  selector: 'app-update-news-card',
  templateUrl: './update-news-card.component.html',
  styleUrls: ['./update-news-card.component.css']
})
export class UpdateNewsCardComponent implements OnInit {

  newsCardForm = new FormGroup({
    title: new FormControl(''),
  });

  operationMessage = ''
  constructor(private auth:AuthService, private router:Router, private cardservice:NewsCardService) { }

  
  ngOnInit(): void {
  }
  onSubmit() {
    this.cardservice.edit_card(this.newsCardForm.value.title || '').subscribe(
      response => {
        this.operationMessage = 'News Card updated successfully';
        console.log(response);
        this.router.navigate(['home'])
      },
      error => {
        this.operationMessage = 'Error updating lab';
        console.error(error);
      }
    )
  }

}
