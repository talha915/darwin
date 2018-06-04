import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightbody',
  templateUrl: './rightbody.component.html',
  styleUrls: ['./rightbody.component.css']
})
export class RightbodyComponent implements OnInit {
  private itemSelected:number = 0;
  constructor() { }

  ngOnInit() {
  }
  myfunct(){
    this.itemSelected= this.itemSelected + 1;
    console.log(this.itemSelected);
    return this.itemSelected;
  }
}
