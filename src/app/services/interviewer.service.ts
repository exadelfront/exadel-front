import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { INTERVIEWER_INFO_SEND_URL } from '../../environments/environment';
import { map } from 'rxjs/operators';

export interface Interviewer {
  id?: number;
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

export interface Admin {
  id?: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  skype: string;
  type: string;
  subjects?: string[];
  interviewTimes?: object[];
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

  getHRInterviewers(): Observable<InterviewerTimes[]>{
     return this.http.get<InterviewerTimes[]>(`${INTERVIEWER_INFO_SEND_URL}/available?search=type==hr`);
  }
  getTechInterviewers(subjects:string[]): Observable<InterviewerTimes[]>{
     return this.http.get<InterviewerTimes[]>(`${INTERVIEWER_INFO_SEND_URL}/available?search=type==tech;subjects.name=in=(${subjects})`);
  }

  sendTime(time: any, id: number): Observable<object> {
    return this.http.post(`${INTERVIEWER_INFO_SEND_URL}/${id}/time`, time);
  }

  getAdminInfo(id: number): Observable<Admin>{
    return this.http.get<Admin>(`${INTERVIEWER_INFO_SEND_URL}/${id}`);
  }

  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`${INTERVIEWER_INFO_SEND_URL}/${id}`);
  }

  updateData(admin: Admin, id: number): Observable<any> {
    const data = JSON.stringify(admin);
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${INTERVIEWER_INFO_SEND_URL}/${id}`, data, {headers: myHeaders});
  }
}
