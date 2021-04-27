import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Post, PostsService} from '../../services/posts.service';


@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  @Input() posts: Post[];
  @Output() location: string[];
  @Output() technology: string[];
  @Output() eventType: string[];
  @Output() internshipStatus: string[];
  @Output() selectedFilter: EventEmitter<any> = new EventEmitter<any>();


  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.fetchEvents()
      .subscribe(posts => {

        const locationArr: string [] = posts.map(el => el.countries).join(',').split(',');
        this.location = locationArr.filter((el: string, i: number) => locationArr.indexOf(el) === i).sort();

        const technologyArr: string [] = posts.map(el => el.subjects).join(',').split(',');
        this.technology = technologyArr.filter((el: string, i: number) => technologyArr.indexOf(el) === i).sort();

        const eventTypeArr: string [] = posts.map(el => el.internshipType);
        this.eventType = eventTypeArr.filter((el: string, i: number) => eventTypeArr.indexOf(el) === i).sort();

        const internshipStatusArr: string [] = posts.map(el => el.format);
        this.internshipStatus = internshipStatusArr.filter((el: string, i: number) => internshipStatusArr.indexOf(el) === i).sort();

        console.log(this.posts, this.location);
    });
  }


  onFilter(event: any): void {
    this.selectedFilter.emit(event);
    console.log(event);
  }

}
