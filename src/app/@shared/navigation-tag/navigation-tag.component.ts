import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Post} from '../../services/posts.service';

@Component({
  selector: 'app-navigation-tag',
  templateUrl: './navigation-tag.component.html',
  styleUrls: ['./navigation-tag.component.scss']
})

export class NavigationTagComponent implements OnInit {
  @Input() posts: Post[];
  @Input() title: string[];
  @Output() selectedFilter: EventEmitter<any> = new EventEmitter<any>();


  constructor() {}


  ngOnInit(): void { }

  filter(event): void {
    console.log(this.posts, this.selectedFilter, this.title);
    this.selectedFilter.emit({selectedFilter: event.target.innerHTML});
  }

}
