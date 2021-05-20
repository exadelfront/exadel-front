import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginMenuComponent} from '../@core/login-menu/login-menu.component';
import {StudentsTablePageComponent} from '../@core/students-table-page/students-table-page.component';
import {InfoStudentPageComponent} from '../@core/info-student-page/info-student-page.component';
import {PostCreationComponent} from '../@shared/post-creation/post-creation.component';
import {StudentHistoryPageComponent} from '../@core/student-history-page/student-history-page.component';
import {PostTablePageComponent} from '../@shared/post-table-page/post-table-page.component';
import {PostViewAdminComponent} from '../@shared/post-view-admin/post-view-admin.component';
import { AdminInfoPageComponent} from '../@core/admin-info-page/admin-info-page.component';

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
    path: 'admin/post-table',
    component: PostTablePageComponent
  },
  {
    path: 'admin/post/:id',
    component: PostViewAdminComponent
  },
  {
    path: 'admin/creation',
    component: PostCreationComponent
  },
  {
    path: 'admin/update/:id',
    component: PostCreationComponent
  },
  {
    path: 'admin/stud-info/history/:id',
    component: StudentHistoryPageComponent
  },
  {
    path: 'admin/admin-info/:id',
    component: AdminInfoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAppRoutingModule { }
