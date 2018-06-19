import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../Data/Card';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
 
})
export class CardComponent implements OnInit {
  cardData: Array<any> = Card;

  
  constructor() { }

  ngOnInit() {
    
  }
  public itemSelected:number = 0;
  checkSelected(){
    
    this.itemSelected= this.itemSelected + 1;
    if(this.itemSelected>2){
      this.itemSelected--;
    }
    if(this.itemSelected>=0){
      this.sendMessage();
    }
    console.log("From Card Component",this.itemSelected);
    return this.itemSelected;
  }
  
  @Output() messageEvent = new EventEmitter<number>();
  sendMessage() {
    this.messageEvent.emit(this.itemSelected)
  }
  checkAgain(){
    console.log("Again", this.itemSelected);
  }
}
