import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginMenuComponent} from '../@core/login-menu/login-menu.component';
import {AdminAppComponent} from './admin-app.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminAppComponent,
    children: [
      {path: 'login', component: LoginMenuComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAppRoutingModule { }
