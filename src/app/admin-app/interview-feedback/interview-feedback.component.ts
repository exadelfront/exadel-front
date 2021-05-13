import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlatformLocation } from '@angular/common';
import { InterviewInfo, InterviewService } from '../../services/interview.service';

@Component({
  selector: 'app-interview-feedback',
  templateUrl: './interview-feedback.component.html',
  styleUrls: ['./interview-feedback.component.scss']
})
export class InterviewFeedbackComponent implements OnInit {

  form: FormGroup;
  interviewerDecision: boolean;
  englishLevels: string[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  interviewInfo: InterviewInfo;

  constructor(
    private pLocation: PlatformLocation,
    private interviewService: InterviewService
  ) {}

  ngOnInit(): void {
    this.interviewService.getInterviewInfoByToken('eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxNSJ9.lo3TL-pn469bP1ap-xB1-Ym67ieoBieElYKGfqNI-NuuVj13XxDAv6D7mIKWsvfcW1kR-FhfVX6f3YGr3tcVCw')
      .subscribe(interviewInfo => {
        this.interviewInfo = interviewInfo;
        if (interviewInfo.interviewType === 'HR') {
          this.form = new FormGroup({
            subscription: new FormControl(null, [
              Validators.required,
              Validators.minLength(5),
            ]),
            english: new FormControl(null, Validators.required),
          });
          return;
        }
        this.form = new FormGroup({
          subscription: new FormControl(null, [
            Validators.required,
            Validators.minLength(5),
          ]),
        });
      });
  }

  setInterviewResult(isApproved: boolean): void {
    this.interviewerDecision = isApproved;
  }

  getToken(): string {
    return (this.pLocation as any).location.pathname.split('/').pop();
  }

  getInterviewTime(): string {
    const timeWithSeconds = this.interviewInfo.interviewTime.split('T').pop();
    return timeWithSeconds.split(':').slice(0, -1).join(':');
  }

  getInterviewDate(): string {
    return this.interviewInfo.interviewTime.split('T')[0];
  }

  submit(): void {
    if (this.form.invalid) {
      console.log(this.form.status);
      this.form.reset();
      return;
    }
    const feedback = {
      ...this.interviewInfo,
      ...this.form.value,
      interviewerDecision: this.interviewerDecision,
    };
    this.interviewService.sendFeedback(feedback).subscribe(resp => console.log(resp));
    this.form.reset();
  }
}
