import { Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-join-input',
  template: `<div [formGroup]="parentForm">
              <input formControlName="{{controlName}}" class="form-control" placeholder="{{placeholder}}" type="{{type}}" name="{{name}}"/>
             </div>`,
  styleUrls: ['./join-input.component.scss']
})
export class JoinInputComponent implements OnInit {

  @Input() placeholder: any;
  @Input() type: string;
  @Input() name: string;
  @Input() controlName: string;
  @Input() parentForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

}
