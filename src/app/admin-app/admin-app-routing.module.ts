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
import {AuthGuard} from '../Auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginMenuComponent
  },
  {
    path: 'login/table',
    component: StudentsTablePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login/stud-info/:id',
    component: InfoStudentPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login/post-table',
    component: PostTablePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login/post/:id',
    component: PostViewAdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login/creation',
    component: PostCreationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login/update/:id',
    component: PostCreationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login/stud-info/history/:id',
    component: StudentHistoryPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login/admin-info/:id',
    component: AdminInfoPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAppRoutingModule { }
