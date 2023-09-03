import { Component, OnInit } from '@angular/core';

declare function demo3():void;

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    demo3();
  }

}
