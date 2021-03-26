import {Component, Input, OnInit} from '@angular/core';
import {InternshipPost} from '../app.component';

@Component({
  selector: 'app-internship-card',
  templateUrl: './internship-card.component.html',
  styleUrls: ['./internship-card.component.scss']
})
export class InternshipCardComponent implements OnInit {

  @Input() post: InternshipPost;
  @Input() isGray: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
