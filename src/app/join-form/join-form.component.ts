import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Component, Input, Output, OnInit } from '@angular/core';

// import { JoinInputFormComponent } from '../join-input-form/join-input-form.component';

//  export interface JoinInputFormComponent {
//   type: String;
//   name: String;
//   placeholder: String;
//   formControlName: String;
//   required: boolean;

// }

@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss']
})




export class JoinFormComponent implements OnInit {

    // Fullname: string;
    // tel: 'Telephone',
    // location: 'Location',
    // email: 'Email',
    // GitHub: 'GitHub',
    // english: 'English',
    // interview: [],
    // agreement: "Agreement",
    // notification: 'Notification',


  // type: String;
  // name: String;
  // placeholder: String;
  // formControlName: String;
  // required: boolean;

 
  // inputs: JoinInputForm[] = [
  //   {type: 'text', name: 'Fullname', placeholder: 'Fullname...', formControlName: 'Fullname', required: true},
  //   {type: 'tel', name: 'Telephone', placeholder: 'Telephone...', formControlName: 'Telephone', required: true},
  //   {type: 'text', name: 'Location', placeholder: 'Location...', formControlName: 'Location', required: true},
  //   {type: 'email', name: 'Email', placeholder: 'Telephone...', formControlName: 'Email', required: true},
  //   {type: 'url', name: 'GitHub', placeholder: 'GitHub link ...', formControlName: 'GitHub', required: true}
  // ];


  form: any = FormGroup;

  constructor() { 

  }



  ngOnInit(): void {
    this.form = new FormGroup({
      'Fullname': new FormControl(null, Validators.required),
      'Telephone': new FormControl(null, Validators.required),
      'Email': new FormControl(null, [Validators.required, Validators.email]),
      'GitHub': new FormControl(null, Validators.required),
      'interviewDay': new FormArray([]),
      'CV': new FormControl(null),
      'agreement': new FormControl(null, Validators.requiredTrue),
      'notifications': new FormControl(null),
    });
  }



  onAddInterviewDay(){

    const control = new FormControl(null, Validators.required);
    (<FormArray>this.form.get("interviewDay")).push(control);

  }



  onSubmit(){

    if(this.form.valid) {
    const FormData = {...this.form.value}
    console.log(FormData);
    }

    this.form.reset();
   
  }



}

