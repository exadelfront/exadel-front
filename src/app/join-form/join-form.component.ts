import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ExadelValidators } from './exadel.validators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss']
})




export class JoinFormComponent implements OnInit {

  form: any = FormGroup;

  constructor(private sent: HttpClient) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      FirstName: new FormControl(null, Validators.required),
      LastName: new FormControl(null, Validators.required),
      Telephone: new FormControl(null, [Validators.required, Validators.pattern(/[0-9.+()]\s/)]),
      Location : new FormControl(null, Validators.required),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Skype: new FormControl(null, Validators.required),
      GitHub: new FormControl(null, [Validators.required, ExadelValidators.restrictedGitHubLink]),
      English: new FormControl(null, Validators.required),
      day1: new FormControl(null, Validators.required),
      hours1: new FormControl(null, Validators.required),
      day2: new FormControl(null, Validators.required),
      hours2: new FormControl(null, Validators.required),
      day3: new FormControl(null, Validators.required),
      hours3: new FormControl(null, Validators.required),
      CV: new FormControl(null, [Validators.required, ExadelValidators.restrictedFileTypes]),
      Agreement: new FormControl(null, Validators.requiredTrue),
      Notifications: new FormControl(null),
    });
  }


  // onAddCV():void{
  //   console.log('jhkhk')
  // }

  onSubmit() {
    console.log(this.form, this.form.status);

    if (this.form.valid) {
      const FormData = { ...this.form.value }
      this.sent.post('https://', FormData)
      this.form.reset();
    }
  
  }



}

