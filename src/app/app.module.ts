import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DialogueComponentComponent } from './dialogue-component/dialogue-component.component';
import { DialogueCreateComponent } from './dialoguecreate/dialoguecreate.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RightbodyComponent,
    DropdownComponent,
    DialogueComponentComponent,
    DialogueCreateComponent,
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BootstrapModalModule.forRoot({container:document.body})
  ],
  entryComponents: [
    DialogueComponentComponent,
    DialogueCreateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
