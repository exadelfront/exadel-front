import { Component, Input, OnInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
