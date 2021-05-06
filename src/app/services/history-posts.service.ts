import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { STUDENTS_TABLE_URL } from '../../environments/environment';

export interface HistoryPost {
  internshipTitle: string;
  subjects: string[];
  startDate: string;
  endDate: string;
  additionalInfoId: number;
}

@Injectable({
  providedIn: 'root',
})
export class HistoryPostsService {

    constructor(private http: HttpClient) { }
    
    fetchStudentHistory(id: number):Observable<HistoryPost[]>{
        return this.http.get<HistoryPost[]>(`${STUDENTS_TABLE_URL}/${id}/history`);
  }
}
