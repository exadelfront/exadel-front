import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {URL_FOR_CV, URL_FOR_FORM} from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})

export class StudentFormService {

  constructor(private http: HttpClient) { }

  fetchStudentCV(id: number, file: FormData, options: object): Observable<any> {
    return this.http.post<string>( `${URL_FOR_CV}/${id}/upload`, file, options);
  }

  fetchStudentForm(id: number, FormData: object): Observable<any> {
    return this.http.post(`${URL_FOR_FORM}/${id}/registration`, FormData);
  }
}
