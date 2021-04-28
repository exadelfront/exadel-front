import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Input() isApproveBtn: boolean;
  @Input() controlName: string;
  @Output() noApproveReject: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
  }

  onClick(): void {
    this.noApproveReject.emit(this.isApproveBtn);
  }
}
