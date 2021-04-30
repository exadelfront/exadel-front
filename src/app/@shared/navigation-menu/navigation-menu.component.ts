import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Post} from '../../services/posts.service';


@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  @Input() posts: Post[];
  @Input() countries: string[];
  @Input() subjects: string[];
  @Input() internshipType: string[];
  @Input() format: string[];
  @Input() title;
  @Input() notFound;
  @Output() name: string;

  @Output() selectedFilter: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void { }


  onFilter(event: any): void {
    this.selectedFilter.emit(event);
  }

}
