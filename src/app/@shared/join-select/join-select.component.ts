import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-join-select',
  template: ` <div [formGroup]="parentForm" >
                  <select name="English" formControlName="{{controlName}}" class="form-control" >
                    <option name="English" value="" hidden>{{'JOIN_FORM.English' | translate}}</option>
                    <option name="English" *ngFor="let eng of englishArr"
                            value="{{eng}}"
                    >{{eng}}
                    </option>
                  </select>
              </div>`,
  styleUrls: ['./join-select.component.scss']
})
export class JoinSelectComponent implements OnInit {

  @Input() englishArr: string[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  @Input() controlName: string;
  @Input() parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }


}

