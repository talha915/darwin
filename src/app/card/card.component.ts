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

  public list: number[]=[]; 
  public folder: number[]=[];
  public model: number[]=[];
  public folders: number=0;
  public models: number=0;
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

  checkedCard(data){
    var check=this.list.indexOf(data)
    if(check!=-1){
      this.uncheckSelected(check);
      console.log("Valid");
    }
    else{
      this.checkSelected(data);
      console.log("Invalid");

    }
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


  calculatefooter(data){
    // if(this.cardData[2].childs.length>0){
    //   if(this.cardData[2].childs[0].type==="Folder"){
    //     console.log("Folder",this.cardData[2].childs[data].type )
    //   }
    // }
    // return data.footer;
    var response= this.childlength(data);
    console.log("Response", response);

    return response.model+" Models"+" "+response.folder+" Folders"
    
  }

childlength(data){
  var length=data.childs.length;
  if(length>0){
    var resp = {'folder': 0 , 'model' :0}
    for(var i of data.childs){
      var res= this.childlength(i);
      console.log("Res", res);
      resp['folder'] = resp['folder'] + res['folder']
      resp['model'] = resp['model'] + res['model']
      if (i.type == 'Models'){
        resp['model'] = resp['model'] + 1
      }
      else{
        resp['folder'] = resp['folder'] + 1
      }
    }
    return resp
  }
  else{
    return {'folder': 0 , 'model' :0}
  }
}

  /*checkModels(){
    if(this.cardData[2].childs.length>0){
      //console.log("Childs Name", this.cardData[2].childs.length);
      var first= this.cardData[2].childs.length;
      var first1= this.cardData[2].childs[0].childs[0].name;
      console.log("First", first);
      console.log("First1", first1);
      for(var i=0;i<first;i++){
        var second =  this.cardData[2].childs[i].length;
        console.log("Second", second);
        console.log("Child Name", this.cardData[2].childs[i].name);
      }
    }
  }*/

  filterArray(data){
    if(this.cardData[2].childs.length>0){
      if(this.cardData[2].childs.type=="Folder"){
        this.folders++;
        this.folder.push(this.folders)
      }
      else if(this.cardData[2].childs.type=="Models"){
        this.models++;
        this.model.push(this.models);
      }
      return this.filterArray(data);
    }
  }

}
