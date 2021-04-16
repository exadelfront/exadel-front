import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr-form',
  templateUrl: './hr-form.component.html',
  styleUrls: ['./hr-form.component.scss']
})
export class HrFormComponent implements OnInit {

  englishLevels: string[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  constructor() { }

  ngOnInit(): void {
  }

}
