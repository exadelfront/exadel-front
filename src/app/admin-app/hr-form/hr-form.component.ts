import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HrFormService } from '../../services/hr-form.service';
import { HrReview } from '../../services/hr-form.service';

@Component({
  selector: 'app-hr-form',
  templateUrl: './hr-form.component.html',
  styleUrls: ['./hr-form.component.scss']
})
export class HrFormComponent implements OnInit {

  form: FormGroup;
  englishLevels: string[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  constructor(private hrFormService: HrFormService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      review: new FormControl(null, [
        Validators.required,
        Validators.minLength(50),
      ]),
      englishLevel: new FormControl(null, Validators.required),
      technicalInterviewDate: new FormControl(null, Validators.required),
    });
  }

  submit(): void {
    const hrReview: HrReview = { ...this.form.value };
    console.log(hrReview);
  }
}
