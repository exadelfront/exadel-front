import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-input-date',
  template:  `<div>
                <select name="day" class='form-control'>
                  <option name="day" value="" hidden>Day of the week...</option>
                  <option name="day" *ngFor="let day of InterviewDays"
                        value="{{day}}"
                  >{{day}}
                  </option>
                </select>
              </div>`,
  styleUrls: ['./join-input-date.component.scss']
})

export class JoinInputDateComponent implements OnInit {

 

  @Input() InterviewDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor() { }

  ngOnInit(): void {
  }

  

}
