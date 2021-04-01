import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAppRoutingModule } from './admin-app-routing.module';
import {RateBtnComponent} from './rate-btn/rate-btn.component';


@NgModule({
  declarations: [
    RateBtnComponent,
  ],
  imports: [
    CommonModule,
    AdminAppRoutingModule,
  ]
})
export class AdminAppModule { }
