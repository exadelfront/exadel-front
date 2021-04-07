import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {INTERNSHIPS_PAGE_URL} from '../../environments/environment';

export interface Post {
  title: string;
  subjects: string[];
  countries: string[];
  description: string;
  imageUrl: string;
  startDate: string;
  endDate?: string;
  id?: number;
  additionalInfo?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {

  constructor(private http: HttpClient) {}

  fetchEvents(): Observable<Post[]> {
    return this.http.get<Post[]>(INTERNSHIPS_PAGE_URL);
  }

  fetchPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${INTERNSHIPS_PAGE_URL}/${id}`);
  }
}
