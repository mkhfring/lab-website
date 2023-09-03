import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})

export class MemberComponent implements OnInit {
  public cardTitle:String = '';
  @Input('memeberInfo') member!: Member;
  @Input('currentPosition') position!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
