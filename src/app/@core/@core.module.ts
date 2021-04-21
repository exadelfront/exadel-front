import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { SharedModule } from '../@shared/@shared.module';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { InfoStudentPageComponent } from './info-student-page/info-student-page.component';
import { TechnicalEstimateComponent } from './technical-estimate/technical-estimate.component';
import { StudentsTablePageComponent } from './students-table-page/students-table-page.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    PostPageComponent,
    LoginMenuComponent,
    InfoStudentPageComponent,
    TechnicalEstimateComponent,
    StudentsTablePageComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ],
  exports: [
    MainPageComponent,
    PostPageComponent,
    LoginMenuComponent,
    InfoStudentPageComponent,
    TechnicalEstimateComponent
    ]
})
export class CoreModule { }
