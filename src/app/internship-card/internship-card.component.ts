import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../services/post-cards.service';

@Component({
  selector: 'app-internship-card',
  templateUrl: './internship-card.component.html',
  styleUrls: ['./internship-card.component.scss']
})
export class InternshipCardComponent implements OnInit {

  @Input() post: Post;
  @Input() isGray: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
