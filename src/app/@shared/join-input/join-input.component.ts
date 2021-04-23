import { Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-join-input',
  template: `<div [formGroup]="parentForm">
              <input class="form-control" formControlName="{{ controlName }}" placeholder="{{placeholder}}" type="{{type}}" name="{{name}}"/>
              <span class="star">*</span>
            </div>`,
  styleUrls: ['./join-input.component.scss']
})
export class JoinInputComponent implements OnInit {

  @Input() placeholder: string;
  @Input() type: string;
  @Input() name: string;
  @Input() parentForm: FormGroup;
  @Input() controlName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
