import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-input-date',
  template:  `<div class="join-form-slots" >
                <div class='join-form-slots-date' >
                  <input type="date" name="date"/>
                </div>
                <div class='join-form-slots-hours'>
                  <select name="hours">
                    <option name="hours" value="" hidden>Part of the day...</option>
                    <option name="hours" *ngFor="let hours of InterviewHours"
                          value="{{hours}}"
                    >{{hours}}
                    </option>
                  </select>
                </div>
              </div>`,
  styleUrls: ['./join-input-date.component.scss']
})

export class JoinInputDateComponent implements OnInit {

  @Input() InterviewHours:string[] = ['10.00 - 13.00', '13.00 - 16.00', '16.00 - 19.00'];

  constructor() { }

  ngOnInit(): void {
  }

}
