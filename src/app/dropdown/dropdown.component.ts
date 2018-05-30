import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mydropdown=["Show All", "Drop Down 1","Drop Down 2", "Drop Down 3", "Drop Down 4", "Drop Down 5"];
}
