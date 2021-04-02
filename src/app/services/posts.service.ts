import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Post {
  title: string;
  tags: string[];
  location: string;
  description: string;
  imageUrl: string;
  date: string;
  id?: number;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {

  constructor(private http: HttpClient) {}

  fetchEvents(): Observable<Post[]> {
    return this.http.get<Post[]>('');
  }

  fetchPostById(id: number): Observable<Post> {
    return this.http.get<Post>(``);
  }
}
