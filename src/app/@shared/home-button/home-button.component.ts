import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.scss']
})
export class HomeButtonComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  goToStartPage(): void {
    this._location.back();
  }

}
