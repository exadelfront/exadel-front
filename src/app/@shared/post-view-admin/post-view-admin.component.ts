import {Component, OnInit} from '@angular/core';
import {Post, PostsService} from '../../services/posts.service';
import {ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {INTERNSHIPS_PAGE_ADMIN_URL} from '../../../environments/environment';

@Component({
  selector: 'app-post-view-admin',
  templateUrl: './post-view-admin.component.html',
  styleUrls: ['./post-view-admin.component.scss']
})
export class PostViewAdminComponent implements OnInit {

  post: Post;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.postsService.fetchAdminsPostById(+params.id)
        .subscribe(post => {
          console.log(post);
          this.post = post;
        });
    });
    this.form = new FormGroup({
        empty: new FormControl(null)
      }
    );
  }

  Publish(): void {
    const upload: FormData = new FormData();
    upload.append('published', 'VISIBLE_FOR_INTERNS');
    this.http.patch(INTERNSHIPS_PAGE_ADMIN_URL + '/' + this.post.id, upload)
      .subscribe((ev) => console.log(ev));
    this.post.publishedStatus = 'VISIBLE_FOR_INTERNS';
  }

  UnPublish(): void {
    const upload: FormData = new FormData();
    upload.append('published', 'VISIBLE_FOR_ADMINS');
    this.http.patch(INTERNSHIPS_PAGE_ADMIN_URL + '/' + this.post.id, upload)
      .subscribe((ev) => console.log(ev));
    this.post.publishedStatus = 'VISIBLE_FOR_ADMINS';
  }

  Update(): void {

  }

  Delete(): void {
    this.http.delete(INTERNSHIPS_PAGE_ADMIN_URL + '/' + this.post.id).subscribe();
  }
}
