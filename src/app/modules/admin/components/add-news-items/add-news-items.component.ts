import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-news-items',
  templateUrl: './add-news-items.component.html',
  styleUrls: ['./add-news-items.component.css']
})
export class AddNewsItemsComponent implements OnInit {
  NewsAddForm = new FormGroup(
    {
      body: new FormControl('')
    }
  )
  constructor(private auth:AuthService, private news:NewsService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit():void{
    if (this.NewsAddForm.valid){
      console.log(this.NewsAddForm.value.body);
      this.news.addNews(this.NewsAddForm.value.body || '').subscribe(
        res => {
          console.log(res);
          this.router.navigate(['admin/updateNewsItems'])
        }
      )

    }
    
    console.log('submitted')
  }

}
