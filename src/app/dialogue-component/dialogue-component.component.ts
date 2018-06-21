import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Data } from '../Data/Folder';
@Component({
  selector: 'app-dialogue-component',
  templateUrl: './dialogue-component.component.html',
  styleUrls: ['./dialogue-component.component.css']
})
export class DialogueComponentComponent extends DialogComponent<null, null> implements OnInit{
  folders: Array<any>=Data;
  public list: number[] = [];
  private selectedFolder:number;

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

  clickIcon(data){
    // Toggle Visible state
    data.visible=! data.visible;
    console.log(data)
  }

  folderSelected(data){
    this.selectedFolder = data.id
    
    console.log("Working folder", this.selectedFolder);
  }
}
