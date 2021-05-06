import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-join-select-location',
  template: `<div [formGroup]="parentForm">
              <select name="location" formControlName="{{controlName}}">
                <option name="location" [ngValue]="null" hidden>Location...</option>
                <option name="location" *ngFor="let country of locationArr" [ngValue]="country"
                >{{country}}
                </option>
              </select>
            </div>`,
  styleUrls: ['./join-select-location.component.scss']
})
export class JoinSelectLocationComponent implements OnInit {

  @Input() locationArr: string[] = ['United States', 'Russian Federation', 'Germany', 'Belarus', 'Lithuania', 'Poland', 'Ukraine', 'Uzbekistan'];
  @Input() controlName: string;
  @Input() parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
