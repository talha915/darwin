import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import { DialogueComponentComponent } from '../dialogue-component/dialogue-component.component';
import { DialogueCreateComponent } from '../dialoguecreate/dialoguecreate.component';
@Component({
  selector: 'app-rightbody',
  templateUrl: './rightbody.component.html',
  styleUrls: ['./rightbody.component.css']
})
export class RightbodyComponent implements OnInit {
  private itemSelected:number = 0;
  constructor(private dialogService:DialogService) {}
  showConfirm() {
    let disposable = this.dialogService.addDialog(DialogueComponentComponent); 
    
  }
  myconfirm() {
    let disposable = this.dialogService.addDialog(DialogueCreateComponent); 
  }
  ngOnInit() {
  }
  myfunct(){
    this.itemSelected= this.itemSelected + 1;
    console.log(this.itemSelected);
    return this.itemSelected;
  }
}
