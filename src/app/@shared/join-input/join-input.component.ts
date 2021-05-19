import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-join-input',
  template: `<div [class.notRequired]="notRequired" [formGroup]="parentForm">
              <input class="form-control" formControlName="{{controlName}}" placeholder="{{placeholder}}" type="{{type}}" name="{{name}}" ngModel="{{previousValue}}"/>
             </div>`,
  styleUrls: ['./join-input.component.scss']
})
export class JoinInputComponent implements OnInit {

  @Input() notRequired: boolean;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() name: string;
  @Input() controlName: string = null;
  @Input() parentForm: FormGroup = null;
  @Input() previousValue?: string;

  value: string;


  constructor() { }

  ngOnInit(): void { }

}
