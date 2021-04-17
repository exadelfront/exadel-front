import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-date',
  templateUrl: './choose-date.component.html',
  styleUrls: ['./choose-date.component.scss']
})
export class ChooseDateComponent implements OnInit {


  @Input() type:string;
  constructor() { }

  ngOnInit(): void {
  }

}
