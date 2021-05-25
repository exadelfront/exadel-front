import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() approved: boolean;
  @Input() reject: boolean;
  @Input() placeholder: string;
  @Input() readonly: boolean;
  @Input() textarea_text: string;
  @Input() parentForm: FormGroup;
  @Input() controlName: string;
  @Input() previousValue?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
