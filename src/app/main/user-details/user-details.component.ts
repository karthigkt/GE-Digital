import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  public userDetails:Array<{name:string,age:number}> = [
    {name:'user1',age:10},
    {name:'user2',age:11},
    {name:'user3',age:12},
    {name:'user4',age:13},
    {name:'user5',age:14},
    {name:'user6',age:15}
  ]
  public displayFlag:boolean = true;
  
  ngOnInit(): void {
    
  }

}
