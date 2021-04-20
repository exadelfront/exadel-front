import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { STUDENTS_TABLE_URL } from '../../environments/environment';

export interface Student {
    id?: number;
    traineeName: string;
    traineeSurname:string;
    email: string;
    subjects: string [];
    traineeStatus: string;
    adminName: string;
    adminSurname:string;
    internshipName:string;
    location:string;
}

@Injectable({
  providedIn: 'root',
})
export class StudentsService {

  constructor(private http: HttpClient) {}

  fetchEvents(): Observable<Student[]> {
    return this.http.get<Student[]>(STUDENTS_TABLE_URL);
  }

  fetchStudentByEmail(id: number): Observable<Student> {
    return this.http.get<Student>(`${STUDENTS_TABLE_URL}/${id}`);
  }
}