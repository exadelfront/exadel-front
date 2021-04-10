import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, EventEmitter, OnInit} from '@angular/core';
import {ExadelValidators} from './exadel.validators';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss']
})


export class JoinFormComponent implements OnInit {

  form: any = FormGroup;
  cv: File = null;
  isSubmitted = false;

  constructor(private sent: HttpClient) {
  }


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
      cv: new FormControl(null, [Validators.required, ExadelValidators.restrictedFileTypes, ExadelValidators.fileSizeValidator]),
      agreement: new FormControl(null, Validators.requiredTrue),
      recipient: new FormControl(null),
    });
  }


  handleFiles(event: any): void {
    this.cv = event.target.files[0];
    console.log(this.cv);
  }

  onSubmit(): void {
    console.log(this.form, {...this.form.value}, this.form.status);


    if (this.form.valid) {
      this.isSubmitted = true;
      const FormData = {...this.form.value};
      this.sent.post('https://internships-env.eba-fgnxqddd.eu-central-1.elasticbeanstalk.com/', FormData);
      this.form.reset();
    }

  }


}



