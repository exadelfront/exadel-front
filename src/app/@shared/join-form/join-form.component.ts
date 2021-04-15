
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

  form: FormGroup;
  cv: File = null;
  fileSizeMb: number;
  isSubmitted = false;
  notSubmitted = false;
  interviews: { day: any, time: any }[] = [];
  cvlink: any;
  urlForCV = 'http://internships-env.eba-fgnxqddd.eu-central-1.elasticbeanstalk.com/internship/1/upload';
  urlForForm = 'http://internships-env.eba-fgnxqddd.eu-central-1.elasticbeanstalk.com/internship/1/registration';


  constructor(private sent: HttpClient) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      location : new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      skype: new FormControl(null, Validators.required),
      github: new FormControl(null),
      english: new FormControl(null, Validators.required),
      day1: new FormControl(null, Validators.required),
      hours1: new FormControl(null, Validators.required),
      day2: new FormControl(null, Validators.required),
      hours2: new FormControl(null, Validators.required),
      day3: new FormControl(null, Validators.required),
      hours3: new FormControl(null, Validators.required),
      cv: new FormControl(null, Validators.required),
      agreement: new FormControl(null, Validators.requiredTrue),
      recipient: new FormControl(null)
    });

  }

  handleFiles(event: any): void {
    this.cv = event.target.files[0];
    this.sendCV(this.cv);
  }


  uploadFile(event: any): void {
    this.cv = event[0];
    this.sendCV(this.cv);
  }


  sendCV(cv: File): void {
    this.fileSizeMb = this.cv.size / (1024 * 1024);
    if (this.fileSizeMb < 20) {
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



  higlightTextColor(event: any): any {
    for (let i = 1; i < event.target.children.length; i++) {
      event.target.children[i].style.color = 'black';
      if (event.target.children[i].selected) {
         event.target.style.color = 'black';
      }
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
      // const date: string = new Date().toString();
      // FormData.utc = date;
      this.sent.post(this.urlForForm, FormData)
        .subscribe(ev => {
          console.log(ev);
        });
      this.form.reset();
    } else {
        this.notSubmitted = true;
    }
  }
}



