import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() Approved: boolean;
  @Input() Reject: boolean;
  @Input() Placeholder: string;
  @Input() Readonly: boolean;
  @Input() Text: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
