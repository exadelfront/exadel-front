import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ExadelValidators } from './exadel.validators';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss']
})


export class JoinFormComponent implements OnInit {

  form: FormGroup;
  CV: File = null;
  fileToUpload: File = null;
  slot1: FormArray;


  constructor(private sent: HttpClient) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required]),
      location : new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      skype: new FormControl(null, Validators.required),
      github: new FormControl(null, [Validators.required, ExadelValidators.restrictedGitHubLink]),
      english: new FormControl(null, Validators.required),
      slot1: new FormArray([]),


      // slot1: new FormGroup({
      //   day1: new FormControl(null, Validators.required),
      //   hours1: new FormControl(null, Validators.required),
      // }),

      // day2: new FormControl(null, Validators.required),
      // hours2: new FormControl(null, Validators.required),
      // day3: new FormControl(null, Validators.required),
      // hours3: new FormControl(null, Validators.required),
      cv: new FormControl(null, [Validators.required, ExadelValidators.restrictedFileTypes]),
      agreement: new FormControl(null, Validators.requiredTrue),
      recipient: new FormControl(null)
    });


  }

  // slot1 = this.form.get("slot1") as FormArray;

  setSelect(): void {
    const var1 = new FormControl('', Validators.required);
    this.slot1.push(var1);
  }
  // setSelect(event) {
  //   this.form.controls['slot1'].setValue(event);
  // }


  // handleFileInput(files: FileList): void {
  //   this.fileToUpload = files.item(0);
  //   console.log(this.fileToUpload);
  // }

  onSubmit():void {
  console.log(1, this.form, this.form.status, { ...this.form.value }, this.form.get('slot1').value);

    // if(this.form.valid) {
      const FormData = { ...this.form.value};
      const date: string = new Date().toString();
      FormData.utc = date;
      console.log((FormData));
      this.sent.post('http://localhost:4200/post/1', FormData);
      // this.form.reset();
    // } else {
  //   Object.keys(this.form.controls)
  //     .forEach(controlName => this.form.controls[controlName].markAsTouched());
   }

}



