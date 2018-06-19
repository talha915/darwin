import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../Data/Card';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
 
})
export class CardComponent implements OnInit {
  cardData: Array<any> = Card;

  public list: number[]=[];  
  constructor() { }

  ngOnInit() {
    
  }
  public itemSelected:number = 0;
  
  checkSelected(data){
      this.list.push(data);
      this.sendMessage();
      return this.list.length;
  }
  
  @Output() messageEvent = new EventEmitter<number>();

  sendMessage() {
    this.messageEvent.emit(this.list.length)
  }

  checkAgain(){
    console.log("Again", this.itemSelected);
    console.log("Value from list: ", this.list);
  }

  isChecked(data){
    if(this.list.indexOf(data)>-1){
      return true;
    }
    else{
      return false;
    }
  }

}
