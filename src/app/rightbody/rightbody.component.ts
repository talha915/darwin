import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import { DialogueComponentComponent } from '../dialogue-component/dialogue-component.component';
import { DialogueCreateComponent } from '../dialoguecreate/dialoguecreate.component';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-rightbody',
  templateUrl: './rightbody.component.html',
  styleUrls: ['./rightbody.component.css']
})
export class RightbodyComponent implements OnInit {
  private itemSelected:number=0;
  private folderName: string="";
  constructor(private dialogService:DialogService) {}
  
  ngOnInit() {
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
}
