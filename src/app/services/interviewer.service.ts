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

@Injectable({
  providedIn: 'root'
})
export class InterviewerService {

  constructor(private http: HttpClient) {}

  sendDate(interviewer: Interviewer): Observable<object> {
    return this.http.post<Interviewer>(INTERVIEWER_INFO_SEND_URL, interviewer);
  }
  getHRInterviewers(): Observable<Interviewer[]>{
     return this.http.get<Interviewer[]>(`${INTERVIEWER_INFO_SEND_URL}/available/hr`);
  }
  getTechInterviewers(): Observable<Interviewer[]>{
     return this.http.get<Interviewer[]>(`${INTERVIEWER_INFO_SEND_URL}/available/tech`);
  }
}
