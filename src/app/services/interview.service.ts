import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INTERVIEW_URL } from '../../environments/environment';

export interface Interview {
  traineeId: number;
  internshipId: number;
  interviewerId: number;
  interviewTimeId: number;
}

export interface InterviewInfo {
  id: number;
  traineeName: string;
  traineeSurname: string;
  interviewTime: string;
  interviewerName: string;
  interviewerSurname: string;
  interviewType: string;
  interviewerDecision: boolean;
  english: string;
  subscription: string;
}

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private http: HttpClient) {}

  getInterviewInfoByToken(token: string): Observable<InterviewInfo> {
    return this.http.get<InterviewInfo>(INTERVIEW_URL + `/token/${token}`);
  }

  sendDate(interview: Interview): Observable<object> {
    return this.http.post<Interview>(INTERVIEW_URL, interview);
  }

  sendFeedback(feedback: InterviewInfo): Observable<object> {
    return this.http.put<InterviewInfo>(INTERVIEW_URL + `/${feedback.id}/form`, feedback);
  }
}
