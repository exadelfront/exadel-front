import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-hr-form',
  templateUrl: './hr-form.component.html',
  styleUrls: ['./hr-form.component.scss']
})
export class HrFormComponent implements OnInit {

  form: FormGroup;
  englishLevels: string[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      review: new FormControl(null),
    });
  }

  submit(): void {
    console.log(this.form);
  }
}
