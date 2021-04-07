import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-join-select-hours',
  template: `<div>
              <select name="hours">
                <option name="hours" value="" hidden>{{'JOIN_FORM.InterviewHours' | translate}}</option>
                <option name="hours" *ngFor="let hours of InterviewHours"
                      value="{{hours}}"
                >{{hours}}
                </option>
              </select>
            </div>`,
  styleUrls: ['./join-select-hours.component.scss']
})
export class JoinSelectHoursComponent implements OnInit {

  @Input() InterviewHours:string[] = ['10.00 - 13.00', '13.00 - 16.00', '16.00 - 19.00'];

  constructor() { }

  ngOnInit(): void {
  }

}
