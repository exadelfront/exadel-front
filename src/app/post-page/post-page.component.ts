import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Post, PostCardsService} from '../services/post-cards.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postCardsService: PostCardsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.post = this.postCardsService.getPostById(+params.id);
    });
  }

}
