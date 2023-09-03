import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';

declare function demo3():void;

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[] = [];
  public memberPositions: string[] = ["Professors", "Ph.D. students", "Master's Students"]
  constructor() { }

  ngOnInit(): void {
    this.members = [
      new Member(
        'Ph.D. Candidate', 
        'Ph.D. students',
        'Mohamad Khajezade', 
        'A Ph.D. Candidate in compute science',
        'https://twitter.com/m_khajezade', 
        '../../../assets/mohamad.jpg',
        'phd'
        ),
        new Member(
          'Professors', 
          'Professors',
          'Fatemeh Hendijani Fard', 
          'Dr. Fard is the supervisor of our lab. Her research interests include the application of language models for code',
          'https://cmps.ok.ubc.ca/about/contact/fatemeh-hendijani-fard/', 
          '../../../assets/supervisor.jpg',
          'professors'
          
          ),
    ]

    demo3();
  }

}
