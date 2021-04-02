import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../services/post-cards.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-internship-card',
  templateUrl: './internship-card.component.html',
  styleUrls: ['./internship-card.component.scss']
})
export class InternshipCardComponent implements OnInit {

  @Input() post: Post;
  @Input() isGray: boolean;
  @Input() isBtnPresent: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPostPage(): void {
    this.router.navigate([`/post/${this.post.id}`]);
  }

}
