import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAppRoutingModule } from './admin-app-routing.module';
import { AdminAppComponent } from './admin-app.component';
import { SharedModule } from '../@shared/@shared.module';
import { CoreModule } from '../@core/@core.module';
import { HrFormComponent } from './hr-form/hr-form.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AdminAppComponent,
    HrFormComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AdminAppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    AdminAppComponent,
    HrFormComponent
  ]
})
export class AdminAppModule { }
