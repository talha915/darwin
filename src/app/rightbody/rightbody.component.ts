import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import { DialogueComponentComponent } from '../dialogue-component/dialogue-component.component';
import { DialogueCreateComponent } from '../dialoguecreate/dialoguecreate.component';
import { CardComponent } from '../card/card.component';
import { Card } from '../Data/Card';
import { $ } from 'protractor';
@Component({
  selector: 'app-rightbody',
  templateUrl: './rightbody.component.html',
  styleUrls: ['./rightbody.component.css']
})
export class RightbodyComponent implements OnInit {
  private itemSelected:number=0;
  private folderName: string="";
  private rcvcardData: Array<any>;
  private cardData: Array<any> = Card;
  private cardList : Array<any>=[];
  private combineList: Array<any>;
  constructor(private dialogService:DialogService) {}
  
  ngOnInit() {
    this.rcvcardData = this.cardData;
  }

  modalDialog() {
    let disposable = this.dialogService.addDialog(DialogueComponentComponent);   
  }

  createFolder() {
    let disposable = this.dialogService.addDialog(DialogueCreateComponent); 
  }
  
  receiveMessage($event) {

    this.itemSelected = $event
    console.log("Message: ", this.itemSelected);
  }

  receivefolderName($event){
    this.folderName = $event;
    console.log("Received", this.folderName);
  }

  receivecardData($event){
    this.rcvcardData = $event;
    console.log("Receive Card Data", this.rcvcardData);
  }

  receivecombineData($event){
    this.combineList = $event;
    var obj = {
      name: $event.name,
      list: $event.childs
    }
    this.cardList.push(obj);
    console.log("Card List", this.cardList);
  }

  breadcrum(number, list){
    this.rcvcardData = list;
  }
}
