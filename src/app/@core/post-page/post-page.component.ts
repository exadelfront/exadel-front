import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Post, PostsService} from '../../services/posts.service';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.postsService.fetchPostById(+params.id)
        .subscribe(post => {
          console.log(post);
          this.post = post;
        });
    });
  }
}
