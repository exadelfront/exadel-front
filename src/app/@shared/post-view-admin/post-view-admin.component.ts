import {Component, OnInit} from '@angular/core';
import {Post, PostsService} from '../../services/posts.service';
import {ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {INTERNSHIPS_PAGE_ADMIN_URL} from '../../../environments/environment';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmDialogModel, DialogConfirmComponent } from 'src/app/@shared/dialog-confirm/dialog-confirm.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-view-admin',
  templateUrl: './post-view-admin.component.html',
  styleUrls: ['./post-view-admin.component.scss']
})
export class PostViewAdminComponent implements OnInit {

  post: Post;
  form: FormGroup;
  result: boolean;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private http: HttpClient,
    public dialog: MatDialog,
    private _location: Location
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
    
    const message = `Are you sure you want to DELETE POST ` +this.post?.title+' ?';
    const dialogData = new ConfirmDialogModel("Confirm Deleting", message);
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      maxWidth: "65vw",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result) {
      this.http.delete(INTERNSHIPS_PAGE_ADMIN_URL + '/' + this.post.id).subscribe();
      this._location.back();
    }
    });
  }
}
