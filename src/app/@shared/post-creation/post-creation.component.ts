import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../services/posts.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
  urlForImage = '';
  urlForForm = '';
  imageLink: string;
  notSubmitted: boolean;
  isSubmitted: boolean;

  splitedArray: string[] = [];

  constructor(private sent: HttpClient) {
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      internshipType: new FormControl(null, Validators.required),
      format: new FormControl(null, Validators.required),
      subjects: new FormControl(null, Validators.required),
      countries: new FormControl(null, Validators.required),
      skills: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      additionalInfoInternship: new FormControl(null, Validators.required),
      startDate:  new FormControl(null, Validators.required),
      endDate:  new FormControl(null, Validators.required),
      startRequestDate:  new FormControl(null, Validators.required),
      endRequestDate:  new FormControl(null, Validators.required)
    });
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
      this.sent.post<string>(this.urlForImage,
        fileToUpload, HTTPOptions)
        .subscribe(response => {
          this.imageLink = response;
          console.log(response);
        }, error => {
          console.error(error);
        });
    }
  }

  onSubmit(): void {
    this.splitedArray = this.form.value.skills.split(', ');
    this.form.value.skills = this.splitedArray;
    this.splitedArray = this.form.value.subjects.split(', ');
    this.form.value.subjects = this.splitedArray;
    this.splitedArray = this.form.value.countries.split(', ');
    this.form.value.countries = this.splitedArray;
    console.log(this.form.value);
    this.isSubmitted = true;
  }


}
