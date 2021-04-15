import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './@core/main-page/main-page.component';
import {PostPageComponent} from './@core/post-page/post-page.component';
import { StudentsTablePageComponent } from './@core/students-table-page/students-table-page.component';
import {AdminAppComponent} from './admin-app/admin-app.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'post/:id',
    component: PostPageComponent,
  },
  {
    path: 'admin',
    component: AdminAppComponent
  },
  {
    path: 'admin/table',
    component: StudentsTablePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
