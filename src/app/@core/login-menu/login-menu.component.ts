import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToTablePage(): void {
    this.router.navigate([`/admin/table`]);
  }
}
