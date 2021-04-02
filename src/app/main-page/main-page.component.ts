import {Component, OnInit} from '@angular/core';
import {Post, PostsService} from '../services/posts.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postsService.fetchEvents()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

}
