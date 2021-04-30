import { Component, OnInit } from '@angular/core';
import { Post } from '../../services/posts.service';
import { StudentsService } from '../../services/students.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-student-history-page',
  templateUrl: './student-history-page.component.html',
  styleUrls: ['./student-history-page.component.scss']
})
export class StudentHistoryPageComponent implements OnInit {

  posts: Post[] = [];

  constructor(private route: ActivatedRoute, private studentsService: StudentsService,) { }

  ngOnInit(): void {
    this.openHistory();
  }

  openHistory(): void{
    this.route.params.subscribe((params: Params) => {
      this.studentsService.fetchStudentHistory(+params.id)
        .subscribe(posts => {
          console.log(posts);
          this.posts = posts;
        });
    });
  }
}
