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
        'Professors', 
        'Professors',
        'Fatemeh Hendijani Fard', 
        'Dr. Fard is the supervisor of our lab. Her research interests include the application of language models for code',
        'https://cmps.ok.ubc.ca/about/contact/fatemeh-hendijani-fard/', 
        '../../../assets/supervisor.jpg',
        'professors'
        ),
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
          'Ph.D. Candidate', 
          'Ph.D. students',
          'Iman Saberi', 
          "A Ph.D. Student in compute science. Iman is working on Adapters for code undrestanding",
          'https://www.linkedin.com/in/iman-saberi-2a601610b/?originalSubdomain=ca', 
          '../../../assets/iman.jpg',
          'phd'
          ),
    ]

    demo3();
  }

}
