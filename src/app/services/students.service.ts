import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { STUDENTS_TABLE_URL } from '../../environments/environment';

export interface Student {
  additionalInfoId: number;
  traineeName: string;
  traineeSurname:string;
  subjects: string [];
  adminName: string;
  adminSurname:string;
  internshipName:string;
  traineeLocation: string;
  
  cv?: string;
  dates?:object[];
  email?:string;
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
  traineeStatus?:string;
}

@Injectable({
  providedIn: 'root',
})
export class StudentsService {

  constructor(private http: HttpClient) {}

  fetchEvents(): Observable<Student[]> {
    return this.http.get<Student[]>(STUDENTS_TABLE_URL);
  }
  fetchStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${STUDENTS_TABLE_URL}/ai/${id}`);
  }
  filterDataOne(parameter:string, value: string): Observable<Student[]> {
     return this.http.get<Student[]>(`${STUDENTS_TABLE_URL}?search=${parameter}=='${value}'`);
  }
  filterDataMany(parameter_1:string, value_1: string, parameter_2:string, value_2: string): Observable<Student[]> {
     return this.http.get<Student[]>(`${STUDENTS_TABLE_URL}?search=${parameter_1}=='${value_1}';${parameter_2}=='${value_2}'`);
  }
  updateData(student: Student, id: number){
    const data = JSON.stringify(student);
    let myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${STUDENTS_TABLE_URL}/${id}`, data, {headers:myHeaders});
  }
  deleteStudent(id: number){
    return this.http.delete(`${STUDENTS_TABLE_URL}/${id}/delete`);
  }
  deleteStudentInfo(id: number){
    return this.http.delete(`${STUDENTS_TABLE_URL}/ai/${id}/delete`);
  }
}