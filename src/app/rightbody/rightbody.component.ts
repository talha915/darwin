import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightbody',
  templateUrl: './rightbody.component.html',
  styleUrls: ['./rightbody.component.css']
})
export class RightbodyComponent implements OnInit {
  private itemSelected:Number = 0;
  constructor() { }

  ngOnInit() {
  }

}
