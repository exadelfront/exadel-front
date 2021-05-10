import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-approve-reject-button',
  templateUrl: './approve-reject-button.component.html',
  styleUrls: ['./approve-reject-button.component.scss']
})
export class ApproveRejectButtonComponent implements OnInit {

  @Input() text: string;
  @Input() bgcolor = '#2EA3F2';
  @Input() border = '#FFFFFF';
  @Input() parentForm: FormGroup;
  text_color='#FFFFFF'
  constructor() {}

  ngOnInit(): void {
  }
  hoverEffect(){
    this.text_color=this.bgcolor;
    this.bgcolor='#FFFFFF';
  }
  disableHoverEffect(){
    this.bgcolor=this.text_color;
    this.text_color='#FFFFFF';
  }
}
