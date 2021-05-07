import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INTERVIEWER_INFO_SEND_URL } from '../../environments/environment';

export interface Interviewer {
  id?: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  skype: string;
  type: string;
  subjects?: string[];
  dates?: string[];
}

export interface InterviewerTimes{
  interviewTimeId: number;
  startDate: string;
  endDate: string;
  interviewers: [{
    interviewerId: number;
    name: string;
    surname: string;
  }];
}

export interface Interviewers{
  interviewerId: number;
  name: string;
  surname: string;
}
@Injectable({
  providedIn: 'root'
})
export class InterviewerService {

  constructor(private http: HttpClient) {}

  sendDate(interviewer: Interviewer): Observable<object> {
    return this.http.post<Interviewer>(INTERVIEWER_INFO_SEND_URL, interviewer);
  }
  getHRInterviewers(): Observable<InterviewerTimes[]>{
     return this.http.get<InterviewerTimes[]>(`${INTERVIEWER_INFO_SEND_URL}/available?search=type==hr`);
  }
  getTechInterviewers(subjects:string[]): Observable<InterviewerTimes[]>{
     return this.http.get<InterviewerTimes[]>(`${INTERVIEWER_INFO_SEND_URL}/available?search=type==tech;subjects.name=in=(${subjects})`);
  }
}
