import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';


@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent implements OnInit {

  form: FormGroup;
  isInvalid = false;
  returnUrl: string;

  constructor(private router: Router, private login: LoginService, private route: ActivatedRoute) {


    // if (this.login.getLoggedUser()) {
    //   this.router.navigate(['/login/table']);
    // }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
    //
    // this.login.loggedInUserSubject.subscribe(value => this.loggedInUserSubject = value);
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
  }

  onSubmit(): void {

    if (this.form.valid) {
      console.log(this.form.value.username, this.form.value.password);
      this.login.login(this.form.value.username, this.form.value.password)
        .subscribe(response => {
          console.log(response.body.roleList);
          if (response.status === 200) {
            this.isInvalid = false;
            this.router.navigate(['/login/table']);
          }
        }, err => {
          console.log(err)
          this.isInvalid = true;
        });
    } else {
      this.isInvalid = true;
    }
  }

  logout(): void {
    this.login.logout().subscribe(
      res => {
          this.router.navigateByUrl('/login');
      });
  }

}
