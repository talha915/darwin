import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
@Component({
  selector: 'app-dialoguecreate',
  templateUrl: './dialoguecreate.component.html',
  styleUrls: ['./dialoguecreate.component.css']
})
export class DialogueCreateComponent extends DialogComponent<null, null> implements OnInit{
  
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    
    this.close();
  }
  ngOnInit() {
  }

}
