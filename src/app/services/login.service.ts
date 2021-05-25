import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,  BehaviorSubject } from 'rxjs';
import {tap} from 'rxjs/operators';
import { ADMIN_LOGIN_URL } from '../../environments/environment';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root',
})

export class LoginService {
  private loggedInUserSubject: BehaviorSubject<string>;

  constructor(private http: HttpClient,  private router: Router, private cookieService: CookieService) {
    this.loggedInUserSubject = new BehaviorSubject<any>(this.cookieService.get( 'role'));
  }

  public getLoggedUser(): string {
    return this.loggedInUserSubject.value;
  }


  login(username: string, password: string): Observable<any> {
     return this.http.post(`${ADMIN_LOGIN_URL}`, {username, password}, {observe: 'response'})
     .pipe(tap(user => {
        this.loggedInUserSubject.next(user.body.roleList[0]);
        this.cookieService.set('role', user.body.roleList[0]);
     }))
  }



  logout(): Observable<any> {
    return this.http.get(`http://internships-env.eba-fgnxqddd.eu-central-1.elasticbeanstalk.com/authout`)
      .pipe(tap(res => {
          this.loggedInUserSubject.next(null);
          this.cookieService.delete('role');
      }))
  }

}
