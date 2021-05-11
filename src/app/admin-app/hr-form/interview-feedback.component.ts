import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InterviewFeedbackService } from '../../services/interview-feedback.service';
import { HrReview } from '../../services/interview-feedback.service';

@Component({
  selector: 'app-interview-feedback',
  templateUrl: './interview-feedback.component.html',
  styleUrls: ['./interview-feedback.component.scss']
})
export class InterviewFeedbackComponent implements OnInit {

  form: FormGroup;
  isApproved: boolean;
  englishLevels: string[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  constructor(private interviewFeedbackService: InterviewFeedbackService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      review: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      englishLevel: new FormControl(null, Validators.required),
    });
  }

  setInterviewResult(isApproved: boolean): void {
    this.isApproved = isApproved;
  }

  submit(): void {
    if (this.form.invalid) {
      console.log(this.form.status);
      this.form.reset();
      return;
    }
    const hrReview = { ...this.form.value, isApproved: this.isApproved};
    this.form.reset();
    console.log(hrReview);
  }
}
