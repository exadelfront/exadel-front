import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinFormComponent } from './join-form/join-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { SharedModule } from '../@shared/@shared.module';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { InfoStudentPageComponent } from './info-student-page/info-student-page.component';
import { TechnicalEstimateComponent } from './technical-estimate/technical-estimate.component';
import { StudentsTablePageComponent } from './students-table-page/students-table-page.component';


@NgModule({
  declarations: [
    JoinFormComponent,
    MainPageComponent,
    PostPageComponent,
    LoginMenuComponent,
    InfoStudentPageComponent,
    TechnicalEstimateComponent,
    StudentsTablePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
    exports: [
        JoinFormComponent,
        MainPageComponent,
        PostPageComponent,
        LoginMenuComponent,
        InfoStudentPageComponent,
        TechnicalEstimateComponent
    ],
})
export class CoreModule { }
