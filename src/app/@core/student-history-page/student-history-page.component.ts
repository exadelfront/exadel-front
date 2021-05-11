import { Component, OnInit } from '@angular/core';
import { HistoryPost, HistoryPostsService } from '../../services/history-posts.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-student-history-page',
  templateUrl: './student-history-page.component.html',
  styleUrls: ['./student-history-page.component.scss']
})
export class StudentHistoryPageComponent implements OnInit {

  posts: HistoryPost[] = [];
  

  constructor(private route: ActivatedRoute, private historyPostsService: HistoryPostsService,) { }

  ngOnInit(): void {
    this.openHistory();
  }
  
  openHistory(): void{
    this.route.params.subscribe((params: Params) => {
      this.historyPostsService.fetchStudentHistory(+params.id)
        .subscribe(res => {
          console.log(res);
          this.posts = res;
        });
    });
  }
}
