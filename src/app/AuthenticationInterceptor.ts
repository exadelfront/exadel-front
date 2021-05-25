import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import {  HttpRequest,  HttpHandler,  HttpEvent,  HttpInterceptor} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import {LoginService} from './services/login.service';
import {CookieService} from 'ngx-cookie-service';

@Injectable()

export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private login: LoginService, private router: Router, private cookieService: CookieService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

   const clonedRequest = request.clone({withCredentials: true});
   return next.handle(clonedRequest)
      .pipe(map((event: HttpEvent<any>) => event),
        catchError(error => {
          if (error.status === 401) {
            this.cookieService.deleteAll();
            this.router.navigate(['/login']);
          }
          return throwError(error);
        }));

  }
}
