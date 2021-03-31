import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAppRoutingModule } from './admin-app-routing.module';
import { AdminAppComponent } from './admin-app.component';


@NgModule({
  declarations: [AdminAppComponent],
  imports: [
    CommonModule,
    AdminAppRoutingModule
  ],
  exports:[AdminAppComponent]
})
export class AdminAppModule { }
