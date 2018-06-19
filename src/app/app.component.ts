import { Component, ViewChild } from '@angular/core';
import {RightbodyComponent} from './rightbody/rightbody.component';
import { DialogService } from "ng2-bootstrap-modal";
import { DialogueComponentComponent } from './dialogue-component/dialogue-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // template: `<app-card></app-card>`
})
export class AppComponent {
  constructor(private dialogService:DialogService) {}
  showConfirm() {
    let disposable = this.dialogService.addDialog(DialogueComponentComponent); 
  }
  title = 'app';
  
  /*constructor(private popup: Popup){}

  ClickButton(){
    this.popup.show();
  }*/
  
 
}
