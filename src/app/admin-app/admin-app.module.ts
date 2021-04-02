import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAppRoutingModule } from './admin-app-routing.module';
import {RateBtnComponent} from './rate-btn/rate-btn.component';
import { AdminAppComponent } from './admin-app.component';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { ApproveRejectButtonComponent } from './approve-reject-button/approve-reject-button.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  declarations: [
    RateBtnComponent,
    AdminAppComponent,
    LoginMenuComponent,
    ApproveRejectButtonComponent,
    TextareaComponent
  ],
  imports: [
    CommonModule,
    AdminAppRoutingModule
  ],
  exports: [
    AdminAppComponent
  ]
})
export class AdminAppModule { }
