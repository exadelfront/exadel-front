import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './@core/main-page/main-page.component';
import { PostPageComponent } from './@core/post-page/post-page.component';
import { TechnicalEstimateComponent } from './@core/technical-estimate/technical-estimate.component';
import { InterviewFeedbackComponent } from './admin-app/interview-feedback/interview-feedback.component';
import { InterviewerAddPageComponent } from './admin-app/intrviewer-add-page/interviewer-add-page.component';
import { InterviewersTablePageComponent } from './admin-app/interviewers-table-page/interviewers-table-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'post/:id',
    component: PostPageComponent,
  },
  {
    path: 'login/hrform',
    component: InterviewFeedbackComponent,

  },
  {
    path: 'login/techform',
    component: TechnicalEstimateComponent,
  },
  {
    path: 'login/addInterviewer',
    component: InterviewerAddPageComponent,
  },
  {
    path: 'login/interviewers',
    component: InterviewersTablePageComponent,
  },
  {
    path: 'interview/:token',
    component: InterviewFeedbackComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
