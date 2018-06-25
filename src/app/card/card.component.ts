import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../Data/Card';
import { filterQueryId } from '@angular/core/src/view/util';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],

})
export class CardComponent implements OnInit {
  cardData: Array<any> = Card;

  public list: number[] = [];

  constructor() { }

  ngOnInit() {

  }
  public itemSelected: number = 0;

  checkSelected(data) {
    this.list.push(data);
    this.sendMessage();
    return this.list.length;
  }

  uncheckSelected(index) {
    this.list.splice(index, 1);
    this.sendMessage();
    return this.list.length;
  }

  checkedCard(data) {
    var check = this.list.indexOf(data)
    if (check != -1) {
      this.uncheckSelected(check);
      console.log("Valid");
    }
    else {
      this.checkSelected(data);
      console.log("Invalid");

    }
  }

  @Output() messageEvent = new EventEmitter<number>();

  sendMessage() {
    this.messageEvent.emit(this.list.length)
  }

  @Output() foldernameEvent = new EventEmitter<String>();
  sendfolderName(data){
    this.foldernameEvent.emit(data);
    console.log(data);
  }

  

  checkAgain() {
    console.log("Again", this.itemSelected);
    console.log("Value from list: ", this.list);
  }

  isChecked(data) {
    if (this.list.indexOf(data) > -1) {
      return true;
    }
    else {
      return false;
    }
  }


  calculatefooter(data) {
    var response = this.childlength(data);
    //console.log("Response", response);
    return response.model + " Models" + " " + response.folder + " Folders";
  }

  childlength(data) {
    var length = data.childs.length;
    if (length > 0) {
      var resp = { 'folder': 0, 'model': 0 }
      for (var i of data.childs) {
        var res = this.childlength(i);
        //console.log("Res", res.folder);
        resp['folder'] = resp['folder'] + res['folder']
        resp['model'] = resp['model'] + res['model']
        if (i.type == 'Models') {
          resp['model'] = resp['model'] + 1
        }
        else {
          resp['folder'] = resp['folder'] + 1
        }
      }
      return resp
    }
    else {
      return { 'folder': 0, 'model': 0 }
    }
  }



  //   filterArray(data){
  //     if(this.cardData[2].childs.length>0){
  //       if(this.cardData[2].childs.type=="Folder"){
  //         this.folders++;
  //         this.folder.push(this.folders)
  //       }
  //       else if(this.cardData[2].childs.type=="Models"){
  //         this.models++;
  //         this.model.push(this.models);
  //       }
  //       return this.filterArray(data);
  //     }
  //   }

}
