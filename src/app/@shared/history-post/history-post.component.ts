import { Component,Input, OnInit } from '@angular/core';
import {HistoryPost} from '../../services/history-posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-history-post',
  templateUrl: './history-post.component.html',
  styleUrls: ['./history-post.component.scss']
})
export class HistoryPostComponent implements OnInit {

  @Input() post: HistoryPost;
  @Input() isGray: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  openInfo(id:number):void {
    this.router.navigate([`/login/stud-info/${id}`]);
  }
}
