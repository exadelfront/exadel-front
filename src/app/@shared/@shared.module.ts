import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeButtonComponent } from './home-button/home-button.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { FooterComponent } from './footer/footer.component';
import { InternshipCardComponent } from './internship-card/internship-card.component';
import { JoinInputDateComponent } from './join-input-date/join-input-date.component';
import { JoinSelectComponent } from './join-select/join-select.component';
import { JoinInputComponent } from './join-input/join-input.component';
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
import { StudentInfoComponent } from './student-info/student-info.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    JoinInputDateComponent,
    JoinSelectComponent,
    JoinInputComponent,
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
    StudentInfoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
          },
          defaultLanguage: 'en'
        })
  ],
  exports: [
    JoinInputDateComponent,
    JoinSelectComponent,
    JoinInputComponent,
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
    StudentInfoComponent
  ]
})
export class SharedModule { }
