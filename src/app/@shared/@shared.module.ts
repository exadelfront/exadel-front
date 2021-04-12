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
import { NavigationTagComponent } from './navigation-tag/navigation-tag.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { InfoSectionHeaderComponent } from './info-section-header/info-section-header.component';
import { TableComponent } from './table/table.component';


import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

const MaterialModules = [
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
];

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
    NavigationTagComponent,
    StudentInfoComponent,
    InfoSectionHeaderComponent,
    TableComponent
  ],

  imports: [
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
    StudentInfoComponent,
    InfoSectionHeaderComponent,
    TableComponent
  ]
})
export class SharedModule { }
