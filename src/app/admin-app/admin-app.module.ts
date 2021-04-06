import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAppRoutingModule } from './admin-app-routing.module';
import { AdminAppComponent } from './admin-app.component';
import { SharedModule } from '../@shared/@shared.module';
import { CoreModule } from '../@core/@core.module';


@NgModule({
  declarations: [
    AdminAppComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AdminAppRoutingModule
  ],
  exports: [
    AdminAppComponent
  ]
})
export class AdminAppModule { }
