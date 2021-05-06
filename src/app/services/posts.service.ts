import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {INTERNSHIPS_PAGE_ADMIN_URL, INTERNSHIPS_PAGE_URL} from '../../environments/environment';

export interface Post {
  title: string;
  subjects: string[];
  countries: string[];
  description: string;
  image: string;
  startDate: string;
  endDate?: string;
  id?: number;
  additionalInfoInternship?: string;
  format?: string;
  skills?: string[];
  startRequestDate?: string;
  endRequestDate?: string;
  internshipType?: string;
  publishedStatus?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  fetchEvents(): Observable<Post[]> {
    return this.http.get<Post[]>(INTERNSHIPS_PAGE_URL);
  }

  fetchAdminsEvents(): Observable<Post[]> {
    return this.http.get<Post[]>(INTERNSHIPS_PAGE_ADMIN_URL);
  }

  fetchPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${INTERNSHIPS_PAGE_URL}/${id}`);
  }


  fetchAdminsPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${INTERNSHIPS_PAGE_ADMIN_URL}/${id}`);
  }

}
