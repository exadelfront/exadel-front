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

  constructor(private router: Router, private login: LoginService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {

    if (this.form.valid) {
      this.login.login(this.form.value.username.trim(), this.form.value.password.trim())
        .subscribe(response => {
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

}
