import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAppRoutingModule } from './admin-app-routing.module';
import { AdminAppComponent } from './admin-app.component';
import { TextareaComponent } from './textarea/textarea.component';


@NgModule({
  declarations: [
    AdminAppComponent,
    TextareaComponent],
  imports: [
    CommonModule,
    AdminAppRoutingModule
  ],
  exports: [
    AdminAppComponent]
})
export class AdminAppModule { }
