import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAppRoutingModule } from './admin-app-routing.module';
import { AdminAppComponent } from './admin-app.component';
import { SharedModule } from '../@shared/@shared.module';
import { CoreModule } from '../@core/@core.module';
import { HrFormComponent } from './hr-form/hr-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterviewerAddPageComponent } from './intrviewer-add-page/interviewer-add-page.component';
import { AddClassIfTrueDirective } from '../directives/add-class-if-true.directive';
import { InterviewersTablePageComponent } from './interviewers-table-page/interviewers-table-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}

const MaterialModules = [
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatSelectModule,
];

@NgModule({
  declarations: [
    AdminAppComponent,
    HrFormComponent,
    InterviewerAddPageComponent,
    AddClassIfTrueDirective,
    InterviewersTablePageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AdminAppRoutingModule,
    ReactiveFormsModule,
    ...MaterialModules,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
  ],
    exports: [
        AdminAppComponent,
        HrFormComponent,
        InterviewerAddPageComponent,
        AddClassIfTrueDirective,
        InterviewersTablePageComponent
    ]
})
export class AdminAppModule { }
