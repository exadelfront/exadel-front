import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-rate-btn',
  templateUrl: './rate-btn.component.html',
  styleUrls: ['./rate-btn.component.scss']
})
export class RateBtnComponent implements OnInit {

  @Input() name: string;
  @Input() value: string;
  @Input() id: number;
  @Input() parentForm: FormGroup;
  @Input() controlName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
