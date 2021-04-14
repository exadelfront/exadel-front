import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, EventEmitter, OnInit} from '@angular/core';
import {ExadelValidators} from './exadel.validators';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss']
})


export class JoinFormComponent implements OnInit {

  form: any = FormGroup;
  cv: any = null;
  isSubmitted = false;
  cvlink: any;
  urlForCV = 'http://internships-env.eba-fgnxqddd.eu-central-1.elasticbeanstalk.com/internship/1/upload';
  urlForForm = 'http://internships-env.eba-fgnxqddd.eu-central-1.elasticbeanstalk.com/internship/1/registration';

  constructor(private sent: HttpClient) {
  }

  interviews: { day: any, time: any }[] = [];


  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.pattern('[0-9.+()]{10,}')]),
      location: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      skype: new FormControl(null, Validators.required),
      github: new FormControl(null, ExadelValidators.restrictedGitHubLink),
      english: new FormControl(null, Validators.required),
      day1: new FormControl(null, Validators.required),
      hours1: new FormControl(null, Validators.required),
      day2: new FormControl(null, Validators.required),
      hours2: new FormControl(null, Validators.required),
      day3: new FormControl(null, Validators.required),
      hours3: new FormControl(null, Validators.required),
      cv: new FormControl(null, [Validators.required, ExadelValidators.fileSizeValidator]),
      agreement: new FormControl(null, Validators.requiredTrue),
      recipient: new FormControl(null),
    });
  }


  handleFiles(event: any): void {
    this.cv = event.target.files[0];

    const fileSizeMb = this.cv.size / (1024 * 1024);
    if (fileSizeMb < 20) {
      const fileToUpload: FormData = new FormData();
      fileToUpload.append('file', this.cv, this.cv.name);
      const HTTPOptions = {
        headers: new HttpHeaders(),
        responseType: 'text' as 'json'
      };
      this.sent.post<string>( this.urlForCV,
        fileToUpload, HTTPOptions)
        .subscribe(response => {
          this.cvlink = response;
          console.log(response);
        }, error => {
          console.error(error);
        });
    }
  }

  changeToArray(): void {
    this.interviews[0] = {day: this.form.value.day1, time: this.form.value.hours1};
    this.interviews[1] = {day: this.form.value.day2, time: this.form.value.hours2};
    this.interviews[2] = {day: this.form.value.day3, time: this.form.value.hours3};

    this.form.value.dates = this.interviews;

    delete this.form.value.day1;
    delete this.form.value.day2;
    delete this.form.value.day3;
    delete this.form.value.hours1;
    delete this.form.value.hours2;
    delete this.form.value.hours3;
    this.form.value.cv = this.cvlink;
  }

  onSubmit(): void {
    this.changeToArray();
    console.log(this.form, {...this.form.value}, this.form.status);

    if (this.form.valid) {
      this.isSubmitted = true;
      const FormData = {...this.form.value};
      this.sent.post(this.urlForForm, FormData)
        .subscribe(ev => {
        });
      // this.form.reset();
    }

  }


}



