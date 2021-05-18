import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post, PostsService} from '../../services/posts.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {
  COUNTRIES_LIST_URL,
  FORM_SEND_URL, FORMAT_LIST_URL,
  IMAGE_UPLOAD_URL, INTERNSHIPS_PAGE_ADMIN_URL, SKILLS_LIST_URL,
  SUBJECTS_LIST_URL, TYPE_LIST_URL
} from '../../../environments/environment';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.scss']
})
export class PostCreationComponent implements OnInit {
  form: FormGroup;
  post: Post;
  image: File = null;
  fileSizeMb: number;
  fileType: string;
  imageLink: string;
  notSubmitted: boolean;
  isSubmitted: boolean;
  isUpdating = false;


  countries = [];
  countrySuggests = ['Ukraine', 'Belarus', 'United States', 'Lithuania', 'Poland'];

  subjects = [];
  subjectSuggests = ['Java', 'JavaScript', 'DevOps'];

  skills = [];
  skillSuggests = ['.NET', 'Angular 2+', 'Knowledge of SQL'];

  typeSuggests = ['.NET', 'Angular 2+', 'Knowledge of SQL'];

  formatSuggests = ['ONLINE', 'OFFLINE', 'BLENDED'];
  format: string;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private sent: HttpClient,
    private router: Router
  ) {}

  updatePost(): void {

    if (this.post) {
      this.route.params.subscribe((params: Params) => {
        this.postsService.fetchAdminsPostById(+params.id)
          .subscribe(post => {
            console.log(post);
            this.post = post;
          });
      });
      console.log(this.post);
      this.countries = this.post.countries;
      this.subjects = this.post.subjects;
      this.skills = this.post.skills;
      this.format = this.post.format;
    }
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      internshipType: new FormControl(null, Validators.required),
      format: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      additionalInfoInternship: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      startRequestDate: new FormControl(null, Validators.required),
      endRequestDate: new FormControl(null, Validators.required)
    });

    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.isUpdating = true;
        this.postsService.fetchAdminsPostById(+params.id)
          .subscribe(post => {
            console.log(params);
            console.log(post);
            this.post = post;
            this.uploadPost();
          });
      }
    });

    this.sent.get<string[]>(SUBJECTS_LIST_URL).subscribe(
      (item) => this.subjectSuggests = item);
    this.sent.get<string[]>(COUNTRIES_LIST_URL).subscribe(
      (item) => this.countrySuggests = item);
    this.sent.get<string[]>(SKILLS_LIST_URL).subscribe(
      (item) => this.skillSuggests = item);
    this.sent.get<string[]>(TYPE_LIST_URL).subscribe(
      (item) => this.typeSuggests = item);
    this.sent.get<string[]>(FORMAT_LIST_URL).subscribe(
      (item) => this.formatSuggests = item);

    this.updatePost();
  }

  uploadPost(): void {
    if (this.isUpdating) {
      this.countries = this.post.countries;
      this.subjects = this.post.subjects;
      this.skills = this.post.skills;
      this.imageLink = this.post.image;
    }
  }

  uploadFile(event: any): void {
    this.image = event;
    this.sendImage();
  }

  handleFiles(event: any): void {
    this.image = event.target.files[0];
    this.sendImage();
  }

  sendImage(): void {
    this.fileSizeMb = this.image.size / (1024 * 1024);
    this.fileType = this.image.name.split('.')[this.image.name.split('.').length - 1];
    if (this.image && this.fileSizeMb < 20 && (this.fileType === 'jpg' || this.fileType === 'jpeg' || this.fileType === 'png')) {
      const fileToUpload: FormData = new FormData();
      fileToUpload.append('file', this.image, this.image.name);
      const HTTPOptions = {
        headers: new HttpHeaders(),
        responseType: 'text' as 'json'
      };
      this.sent.post<string>(IMAGE_UPLOAD_URL,
        fileToUpload, HTTPOptions)
        .subscribe(response => {
          this.imageLink = response;
          console.log(response);
        }, error => {
          console.error(error);
        });
    }
  }

  toList(): void {
    this.router.navigate(['admin/post-table']);
  }



  onSubmit(): void {
    if (this.form.valid && this.subjects && this.countries && this.skills && this.imageLink){
      this.form.value.subjects = this.subjects;
      this.form.value.countries = this.countries;
      this.form.value.skills = this.skills;
      this.form.value.image = this.imageLink;
      console.log(this.form.value);
      const FormData = {...this.form.value};
      this.isSubmitted = true;
      this.notSubmitted = false;
      if (this.isUpdating) {
        this.sent.put(INTERNSHIPS_PAGE_ADMIN_URL + '/' + this.post.id, FormData)
          .subscribe(ev => {
            console.log(ev);
            this.toList();
          });
      } else {
        this.sent.post(FORM_SEND_URL, FormData)
          .subscribe(ev => {
            console.log(ev);
            this.toList();
          });
      }
      this.form.reset();
    }
    else {
      this.notSubmitted = true;
    }
    console.log(this.form);

  }


}
