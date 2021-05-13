import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-join-select-hours',
  template: `<div [class.notRequired]="notRequired" [formGroup]="parentForm">
              <select [ngStyle]="{ color: light === true ? '#D1D1D1' : '' }" name="hours" formControlName="{{controlName}}">
                <option name="hours" [ngValue]="null" hidden>Part of the day...</option>
                <option name="hours" *ngFor="let hours of InterviewHours" [ngValue]="hours"
                >{{hours}}
                </option>
              </select>
            </div>`,
  styleUrls: ['./join-select-hours.component.scss']
})
export class JoinSelectHoursComponent implements OnInit {

  @Input() InterviewHours: string[] = ['10.00 - 13.00', '13.00 - 16.00', '16.00 - 19.00'];
  @Input() controlName: string;
  @Input() parentForm: FormGroup;
  @Input() light: boolean;
  @Input() notRequired: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
