import { Component, Input, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-join-input-date',
  template:  `<div [formGroup]="parentForm">
                <select name="day" formControlName="{{controlName}}" ngModel>
                  <option name="day" value="" hidden >Part of the week...</option>
                  <option name="day" *ngFor="let day of InterviewDays" [value]="day"
                  >{{day}}
                  </option>
                </select>
              </div>`,
  styleUrls: ['./join-input-date.component.scss'],
})

export class JoinInputDateComponent implements OnInit {

  @Input() InterviewDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  @Input() controlName: string;
  @Input() parentForm: FormGroup;


  constructor() { }

  ngOnInit(): void {
  }

}
