import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginMenuComponent} from '../@core/login-menu/login-menu.component';
import {AdminAppComponent} from './admin-app.component';
import {StudentsTablePageComponent} from '../@core/students-table-page/students-table-page.component';
import {InfoStudentPageComponent} from '../@core/info-student-page/info-student-page.component';

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
    path: 'admin/info/email',
    component: InfoStudentPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAppRoutingModule { }
