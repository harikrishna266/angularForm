import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { MaterialModule } from '@angular/material';
import {CaseService} from './services/case.service';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [CaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
