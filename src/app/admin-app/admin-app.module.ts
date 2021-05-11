import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAppRoutingModule } from './admin-app-routing.module';
import { AdminAppComponent } from './admin-app.component';
import { SharedModule } from '../@shared/@shared.module';
import { CoreModule } from '../@core/@core.module';
import { InterviewFeedbackComponent } from './hr-form/interview-feedback.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterviewerAddPageComponent } from './intrviewer-add-page/interviewer-add-page.component';
import { AddClassIfTrueDirective } from '../directives/add-class-if-true.directive';
import { InterviewersTablePageComponent } from './interviewers-table-page/interviewers-table-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



const MaterialModules = [
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatSelectModule,
];

@NgModule({
  declarations: [
    AdminAppComponent,
    InterviewFeedbackComponent,
    InterviewerAddPageComponent,
    AddClassIfTrueDirective,
    InterviewersTablePageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AdminAppRoutingModule,
    ReactiveFormsModule,
    ...MaterialModules,
  ],
    exports: [
        AdminAppComponent,
        InterviewFeedbackComponent,
        InterviewerAddPageComponent,
        AddClassIfTrueDirective,
        InterviewersTablePageComponent
    ]
})
export class AdminAppModule { }
