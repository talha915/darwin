import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RightbodyComponent } from './rightbody/rightbody.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RightbodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
