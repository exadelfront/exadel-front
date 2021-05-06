import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeButtonComponent } from './home-button/home-button.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { FooterComponent } from './footer/footer.component';
import { InternshipCardComponent } from './internship-card/internship-card.component';
import { JoinFormComponent } from './join-form/join-form.component';
import { JoinInputDateComponent } from './join-input-date/join-input-date.component';
import { JoinSelectComponent } from './join-select/join-select.component';
import { JoinSelectHoursComponent } from './join-select-hours/join-select-hours.component';
import { JoinInputComponent } from './join-input/join-input.component';
import {JoinSelectLocationComponent} from './join-select-location/join-select-location-component';
import { AdditionalInformationComponent } from './additional-information/additional-information.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { LangSwitchButtonComponent } from './lang-switch-button/lang-switch-button.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RateBtnComponent } from './rate-btn/rate-btn.component';
import { ApproveRejectButtonComponent } from './approve-reject-button/approve-reject-button.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ChooseDateComponent } from './choose-date/choose-date.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { NavigationTagComponent } from './navigation-tag/navigation-tag.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { InfoSectionHeaderComponent } from './info-section-header/info-section-header.component';
import { TableComponent } from './table/table.component';



import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule} from '@angular/material/button';

import { DndDirective} from '../directives/dnd.directive';
import { PostCreationComponent } from './post-creation/post-creation.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { HistoryPostComponent } from './history-post/history-post.component';
import {AdminNavigationComponent} from './admin-navigation/admin-navigation.component';
import {AppRoutingModule} from '../app-routing.module';


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}

const MaterialModules = [
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule
];

@NgModule({
  declarations: [
    JoinFormComponent,
    JoinInputDateComponent,
    JoinSelectComponent,
    JoinInputComponent,
    JoinSelectHoursComponent,
    JoinSelectLocationComponent,
    HeaderAppComponent,
    HomeButtonComponent,
    NavigationMenuComponent,
    FooterComponent,
    InternshipCardComponent,
    AdditionalInformationComponent,
    HeaderAppComponent,
    LangSwitchButtonComponent,
    RateBtnComponent,
    ApproveRejectButtonComponent,
    TextareaComponent,
    ChooseDateComponent,
    SectionHeaderComponent,
    DndDirective,
    NavigationTagComponent,
    StudentInfoComponent,
    InfoSectionHeaderComponent,
    TableComponent,
    PostCreationComponent,
    DialogConfirmComponent,
    HistoryPostComponent,
    AdminNavigationComponent
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ...MaterialModules,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
    AppRoutingModule
  ],
  exports: [
    JoinFormComponent,
    JoinInputDateComponent,
    JoinSelectComponent,
    JoinInputComponent,
    JoinSelectHoursComponent,
    JoinSelectLocationComponent,
    HeaderAppComponent,
    HomeButtonComponent,
    NavigationMenuComponent,
    FooterComponent,
    InternshipCardComponent,
    AdditionalInformationComponent,
    HeaderAppComponent,
    LangSwitchButtonComponent,
    RateBtnComponent,
    ApproveRejectButtonComponent,
    TextareaComponent,
    ChooseDateComponent,
    SectionHeaderComponent,
    DndDirective,
    StudentInfoComponent,
    InfoSectionHeaderComponent,
    TableComponent,
    DialogConfirmComponent,
    HistoryPostComponent,
    AdminNavigationComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [DialogConfirmComponent]
})

export class SharedModule { }
export class CustomMaterialModule {}
