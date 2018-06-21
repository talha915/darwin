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
  filter: boolean= false; 
  constructor() { }

  ngOnInit() {
    
  }
  public itemSelected:number = 0;
  
  checkSelected(data){
      this.list.push(data);
      this.sendMessage();
      return this.list.length;
  }
  
  uncheckSelected(index){
    this.list.splice(index,1);
    this.sendMessage();
    return this.list.length;
  }

  filterData(data){
    var check=this.list.indexOf(data)
    if(check!=-1){
      this.uncheckSelected(check);
      console.log("Valid");
    }
    else{
      this.checkSelected(data);
      console.log("Invalid");

    }
    // this.filter=!this.filter;
    // if(this.filter==true){
    //   this.checkSelected(data);
    //   console.log("Checked");
      
    // }
    // else{
    //   console.log("Unchecked");
    // }
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
