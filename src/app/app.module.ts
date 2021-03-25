import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinFormComponent } from './join-form/join-form.component';
import { InternshipCardComponent } from './internship-card/internship-card.component';


@NgModule({
  declarations: [
    AppComponent,
    JoinFormComponent
    InternshipCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
