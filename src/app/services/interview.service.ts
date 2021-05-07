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

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private http: HttpClient) {}

  sendDate(interview: Interview): Observable<object> {
    return this.http.post<Interview>(INTERVIEW_URL, interview);
  }
}
