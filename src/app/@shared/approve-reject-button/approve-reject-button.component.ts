import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-approve-reject-button',
  templateUrl: './approve-reject-button.component.html',
  styleUrls: ['./approve-reject-button.component.scss']
})
export class ApproveRejectButtonComponent implements OnInit {

  @Input() text = '';
  @Input() bgcolor = '#2EA3F2';
  // @Input() align = 'right';

  constructor() { }

  ngOnInit(): void {
  }

}
