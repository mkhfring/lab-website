import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-update-news-items',
  templateUrl: './update-news-items.component.html',
  styleUrls: ['./update-news-items.component.css']
})
export class UpdateNewsItemsComponent implements OnInit {

  newsList: News[] = [];
  constructor(private auth:AuthService, private router:Router, private news:NewsService) { }

  
  ngOnInit(): void {
    this.news.get_lab().subscribe( 
      res=>{
        this.newsList = res
      }
    );
  }
  onSubmit(): void{

    
  }
  reloadPage(): void {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['admin/updateNewsItems']);
    });
}
  editNews(id:number): void{
    this.news.set_news_id(id)
    this.router.navigate(['admin/editNews'])
  }
  deleteNews(id:number): void{
    this.news.delete_news_by_id(id).subscribe(
      res =>{
        console.log(res)
        this.reloadPage();
      }

    )
    // this.router.navigate(['admin/updateNewsItems'])
  }

}
