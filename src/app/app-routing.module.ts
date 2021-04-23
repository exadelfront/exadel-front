import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './@core/main-page/main-page.component';
import {PostPageComponent} from './@core/post-page/post-page.component';
import {TechnicalEstimateComponent} from "./@core/technical-estimate/technical-estimate.component";
import {HrFormComponent} from "./admin-app/hr-form/hr-form.component";


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
    path: 'admin/hrform',
    component: HrFormComponent
  },
  {
    path: 'admin/techform',
    component: TechnicalEstimateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
