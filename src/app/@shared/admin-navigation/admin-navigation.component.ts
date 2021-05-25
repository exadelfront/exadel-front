import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.scss']
})
export class AdminNavigationComponent implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  ngOnInit(): void { }

  logout(): void {
    this.login.logout()
      .subscribe(resp => {
        this.router.navigate(['/login']);
      })
  }

}
