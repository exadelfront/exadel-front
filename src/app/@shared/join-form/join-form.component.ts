
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, Input, OnInit} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {StudentFormService} from '../../services/student-form.service';


@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss'],
})


export class JoinFormComponent implements OnInit {
  @Input() id;
  isLight = false;
  notRequired = true;
  form: FormGroup;
  cv: File = null;
  fileSizeMb: number;
  fileType: string;
  isSubmitted = false;
  notSubmitted = false;
  wasRegistered = false;
  interviews: { day: any, time: any }[] = [];
  cvlink: string;

  constructor(private service: StudentFormService) { }

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
      day2: new FormControl(null),
      hours2: new FormControl(null),
      day3: new FormControl(null),
      hours3: new FormControl(null),
      agreement: new FormControl(false, Validators.requiredTrue),
      recipient: new FormControl(false),
      cv: new FormControl(null, Validators.required)
    });

  }

  handleFiles(event: any): void {
    this.cv = event.target.files[0];
    this.sendCV(this.cv);
  }


  uploadFile(event: any): void {
    this.cv = event;
    this.sendCV(this.cv);
  }


  sendCV(cv: File): void {
    this.fileSizeMb = this.cv.size / (1024 * 1024);
    this.fileType = this.cv.name.split('.')[this.cv.name.split('.').length - 1];

    if (this.cv && this.fileSizeMb < 20 && (this.fileType === 'pdf' || this.fileType === 'png' || this.fileType === 'doc' || this.fileType === 'docx')) {
      const fileToUpload: FormData = new FormData();
      fileToUpload.append('file', this.cv, this.cv.name);

      const HTTPOptions = {
        headers: new HttpHeaders(),
        responseType: 'text' as 'json'
      };

      this.service.fetchStudentCV(this.id, fileToUpload, HTTPOptions)
        .subscribe(response => {
          this.cvlink = response;
          this.form.get('cv').setValue(this.cvlink);
          console.log(response);
        }, error => {
          console.error(error);
        });
    }
  }



  higlightTextColor(event: any): any {
    this.isLight = false;
    for (let i = 1; i < event.target.children.length; i++) {
      event.target.children[i].style.color = 'black';
      if (event.target.children[i].selected) {
         event.target.style.color = 'black';
      }
    }
  }


  changeToArray(): void {
    this.interviews[0] = {day: this.form.value.day1, time: this.form.value.hours1};
    if (this.form.value.day2 !== null || this.form.value.hours2 !== null) {
      this.interviews[1] = {day: this.form.value.day2, time: this.form.value.hours2};
    }
    if (this.form.value.day3 !== null || this.form.value.hours3 !== null) {
      this.interviews[2] = {day: this.form.value.day3, time: this.form.value.hours3};
    }

    this.form.value.dates = this.interviews;

    delete this.form.value.day1;
    delete this.form.value.day2;
    delete this.form.value.day3;
    delete this.form.value.hours1;
    delete this.form.value.hours2;
    delete this.form.value.hours3;
  }

  resetForm(): void {
    this.form.reset();
    this.notSubmitted = false;
    this.isLight = true;
    setTimeout(function(): void {
      this.isSubmitted = false;
      this.wasRegistered = false;
    }.bind(this), 10000);
  }


  onSubmit(): void {
    this.changeToArray();
    console.log(this.form.controls, {...this.form.value}, this.form.status);
    const FormData = {...this.form.value};

    if (this.form.valid) {
      this.service.fetchStudentForm(this.id, FormData)
        .subscribe(ev => {
          console.log(ev);
            this.isSubmitted = true;
            this.resetForm();
        }, error => {
          this.wasRegistered = true;
          this.resetForm();
        }
      );
    } else {
      this.notSubmitted = true;
    }
  }
}



