import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-approve-reject-button',
  templateUrl: './approve-reject-button.component.html',
  styleUrls: ['./approve-reject-button.component.scss']
})
export class ApproveRejectButtonComponent {

  @Input() text: string;
  @Input() bgcolor = '#2EA3F2';
  @Input() border = '#FFFFFF';
  @Input() parentForm: FormGroup;
  @Input() isApproveBtn: boolean;
  @Input() controlName: string;
  @Output() noApproveReject: EventEmitter<boolean> = new EventEmitter<boolean>();
  text_color = '#FFFFFF';

  constructor() {}

  onClick(): void {
    this.noApproveReject.emit(this.isApproveBtn);
  }

  hoverEffect(): void{
    this.text_color = this.bgcolor;
    this.bgcolor = '#FFFFFF';
  }
  disableHoverEffect(): void{
    this.bgcolor = this.text_color;
    this.text_color = '#FFFFFF';
  }
}
