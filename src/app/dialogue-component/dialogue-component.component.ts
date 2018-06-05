import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
@Component({
  selector: 'app-dialogue-component',
  templateUrl: './dialogue-component.component.html',
  styleUrls: ['./dialogue-component.component.css']
})
export class DialogueComponentComponent extends DialogComponent<null, null> implements OnInit{
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
