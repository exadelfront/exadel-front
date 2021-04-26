import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginMenuComponent} from '../@core/login-menu/login-menu.component';
import {AdminAppComponent} from './admin-app.component';
import {StudentsTablePageComponent} from '../@core/students-table-page/students-table-page.component';
import {InfoStudentPageComponent} from '../@core/info-student-page/info-student-page.component';
import {PostCreationComponent} from '../@shared/post-creation/post-creation.component';
import { StudentHistoryPageComponent} from '../@core/student-history-page/student-history-page.component'
const routes: Routes = [
  {
    path: 'admin',
    component: LoginMenuComponent
  },
  {
    path: 'admin/table',
    component: StudentsTablePageComponent
  },
  {
    path: 'admin/stud-info/:id',
    component: InfoStudentPageComponent
  },
  {
    path: 'admin/creation',
    component: PostCreationComponent
  },
  {
    path: 'admin/stud-info/history/:id',
    component: StudentHistoryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAppRoutingModule { }
