import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-join-select',
  template: ` <div [formGroup]="parentForm" class="form-control">
                  <select formControlName="{{controlName}}" name="english" ngModel >
                    <option value="" hidden>{{'JOIN_FORM.English' | translate}}</option>
                    <option *ngFor="let eng of englishArr" value="{{eng}}"
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

  ngOnInit(): void { }

}

