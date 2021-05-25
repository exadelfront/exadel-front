import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { STUDENTS_TABLE_URL, URL_FOR_NOTIFY } from '../../environments/environment';
import { map } from 'rxjs/operators';

export interface Student {
  additionalInfoId: number;
  traineeName: string;
  traineeSurname: string;
  subjects: string [];
  internshipName: string;
  traineeLocation: string;
  internshipId: number;

  cv?: string;
  dates?: object[];
  email?: string;
  english?: string;
  github?: string;
  hrInterview?: string;
  internshipTitle?: string;
  location?: string;
  name?: string;
  phone?: number;
  recipient?: boolean;
  skype?: string;
  surname?: string;
  techInterview?: string;
  id: number;
  traineeId?: number;
  traineeStatus?: string;

  hrInterviewTime: string;
  hrName: string;
  hrSurname: string;
  techInterviewTime: string;
  techName: string;
  techSurname: string;

  adminFullName: string;
}

export interface Conclusion{
  isApproved?: boolean;
}

export interface Notify {
  message: string;
  additionalInfoIds:number[]
}
@Injectable({
  providedIn: 'root',
})
export class StudentsService {

  constructor(private http: HttpClient) {}

  fetchEvents(): Observable<Student[]> {
    return this.http.get<Student[]>(STUDENTS_TABLE_URL).pipe(map(data => {
      return data.map((student: any) => {
        student.traineeFullName = student.traineeName + ' ' + student.traineeSurname;
        return student;
      });
    }));
  }
  fetchStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${STUDENTS_TABLE_URL}/ai/${id}`);
  }
  filterDataOne(parameter: string, value: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${STUDENTS_TABLE_URL}?search=${parameter}=='${value}'`).pipe(map(data=>{
      return data.map((student: any) => {
        student.traineeFullName = student.traineeName + ' ' + student.traineeSurname;
        student.adminFullName = student.adminName + ' ' + student.adminSurname;
        return student;
      });
    }));
  }
  filterDataMany(parameter_1: string, value_1: string, parameter_2: string, value_2: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${STUDENTS_TABLE_URL}?search=${parameter_1}=='${value_1}';${parameter_2}=='${value_2}'`)
      .pipe(map(data => {
      return data.map((student: any) => {
        student.traineeFullName = student.traineeName + ' ' + student.traineeSurname;
        student.adminFullName = student.adminName + ' ' + student.adminSurname;
        return student;
      });
    }));
  }
  updateData(student: Student, id: number){
    const data = JSON.stringify(student);
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${STUDENTS_TABLE_URL}/${id}`, data, {headers: myHeaders});
  }
  deleteStudent(id: number){
    return this.http.delete(`${STUDENTS_TABLE_URL}/${id}/delete`);
  }
  deleteStudentInfo(id: number){
    return this.http.delete(`${STUDENTS_TABLE_URL}/ai/${id}/delete`);
  }
  approve(conclusion:Conclusion,id: number) {
    return this.http.post(`${STUDENTS_TABLE_URL}/ai/${id}`, conclusion);
  }
  reject(conclusion:Conclusion,id:number) {
    return this.http.post(`${STUDENTS_TABLE_URL}/ai/${id}`, conclusion);
  }
  notifyStudents(notify:Notify): Observable<Notify> {
     return this.http.post<Notify>(`${URL_FOR_NOTIFY}`, notify);
  }
}
