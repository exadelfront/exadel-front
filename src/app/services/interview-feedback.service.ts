import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HR_REVIEW_SEND_URL } from '../../environments/environment';

export interface HrReview {
  review: string;
  englishLevel: string;
  isApproved: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class InterviewFeedbackService {

  constructor(private http: HttpClient) { }

  sendHrFormData(hrReview: HrReview): any {
    this.http.post(HR_REVIEW_SEND_URL, hrReview);
  }
}
