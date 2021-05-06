import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INTERVIEWER_INFO_SEND_URL } from '../../environments/environment';
import { map } from 'rxjs/operators';

export interface Interviewer {
  name: string;
  surname: string;
  fullName?: string;
  email: string;
  phone: string;
  skype: string;
  type: string;
  subjects?: string[];
  dates?: string[];
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class InterviewerService {

  constructor(private http: HttpClient) {}

  sendDate(interviewer: Interviewer): Observable<object> {
    return this.http.post<Interviewer>(INTERVIEWER_INFO_SEND_URL, interviewer);
  }

  getAllInterviewers(): Observable<Interviewer[]> {
    return this.http.get<Interviewer[]>(INTERVIEWER_INFO_SEND_URL)
      .pipe(map(interviewers => interviewers.map(interviewer => {
          interviewer.fullName = `${interviewer.name} ${interviewer.surname}`;
          return interviewer;
        })));
  }

  getInterviewersByType(type: string): Observable<Interviewer[]> {
    return this.http.get<Interviewer[]>(`${INTERVIEWER_INFO_SEND_URL}?search=type==${type}`)
      .pipe(map(interviewers => interviewers.map(interviewer => {
        interviewer.fullName = `${interviewer.name} ${interviewer.surname}`;
        return interviewer;
      })));
  }
}
