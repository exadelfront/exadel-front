import {Component, OnInit, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-join-select',
  template: `
    <div [formGroup]="parentForm">
      <select [ngStyle]="{ color: light === true ? '#D1D1D1' : '' }" class="form-control" name="english" formControlName="{{controlName}}">
        <option [ngValue]="null" hidden>English level...</option>
        <option *ngFor="let eng of englishArr" [ngValue]="eng"
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
  @Input() light: boolean;



  constructor() { }

  ngOnInit(): void {}

}

