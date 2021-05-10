import {Component, OnInit} from '@angular/core';
import {Post, PostsService} from '../../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-table-page',
  templateUrl: './post-table-page.component.html',
  styleUrls: ['./post-table-page.component.scss']
})
export class PostTablePageComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postsService: PostsService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postsService.fetchAdminsEvents()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  goToPost(post: any): void {
    this.router.navigate([`/admin/post/${post.id}`]);
  }

  createPost(): void {
    this.router.navigate([`admin/creation`]);
  }
}
