import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminAppModule} from './admin-app/admin-app.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { SharedModule } from './@shared/@shared.module';
import { CoreModule } from './@core/@core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddClassIfTrueDirective } from './directives/add-class-if-true.directive';
import {CookieService} from 'ngx-cookie-service';
import {AuthenticationInterceptor} from './AuthenticationInterceptor';
import {AuthGuard} from './Auth.guard';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AdminAppModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  exports: [
    AddClassIfTrueDirective
  ],
  providers: [
    CookieService,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
