import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAppRoutingModule } from './admin-app-routing.module';
import { AdminAppComponent } from './admin-app.component';
import { SharedModule } from '../@shared/@shared.module';
import { CoreModule } from '../@core/@core.module';
import { HrFormComponent } from './hr-form/hr-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { IntrviewerAddPageComponent } from './intrviewer-add-page/intrviewer-add-page.component';
import {AddClassIfTrueDirective} from '../directives/add-class-if-true.directive';


@NgModule({
  declarations: [
    AdminAppComponent,
    HrFormComponent,
    IntrviewerAddPageComponent,
    AddClassIfTrueDirective
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
        HrFormComponent,
        IntrviewerAddPageComponent,
        AddClassIfTrueDirective
    ]
})
export class AdminAppModule { }
