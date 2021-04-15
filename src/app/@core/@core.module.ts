import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { SharedModule } from '../@shared/@shared.module';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { TechnicalEstimateComponent } from './technical-estimate/technical-estimate.component';


@NgModule({
  declarations: [
    MainPageComponent,
    PostPageComponent,
    LoginMenuComponent,
    TechnicalEstimateComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MainPageComponent,
    PostPageComponent,
    LoginMenuComponent
  ],
})
export class CoreModule { }
