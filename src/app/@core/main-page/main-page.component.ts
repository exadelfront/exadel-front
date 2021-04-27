import {Component, OnInit, Output} from '@angular/core';
import {Post, PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @Output() posts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postsService.fetchEvents()
      .subscribe(posts => {
        this.posts = posts;
      });
  }



  filterPosts(event: any): void {
 //   console.log(event);
    this.posts = this.posts.filter(post => post.countries.includes(event.selectedFilter));
    console.log(this.posts);

  }

}
