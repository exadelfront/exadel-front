import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss']
})




export class JoinFormComponent implements OnInit {

  form: any = FormGroup;

  constructor() { }


  ngOnInit(): void {
    
    this.form = new FormGroup({
      'Fullname': new FormControl('', Validators.required),
      'Telephone': new FormControl('', Validators.required),
      'Email': new FormControl('', [Validators.required, Validators.email]),
      'GitHub': new FormControl('', Validators.required),
      'English': new FormControl('', Validators.required),
      'Interview': new FormArray([]),
      'CV': new FormControl(''),
      'agreement': new FormControl('', Validators.requiredTrue),
      'notifications': new FormControl(''),
    });
  }



  onAddInterview(){

    const control = new FormControl(null, Validators.required);
    (<FormArray>this.form.get("Interview")).push(control);
  }

  
  constructor() { }

  ngOnInit(): void {

  }



  onSubmit(){

    if(this.form.valid) {
      const FormData = {...this.form.value}
      console.log(FormData);
    }
    this.form.reset();
   
  }



}

