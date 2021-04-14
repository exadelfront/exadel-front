import {Component, Input, OnInit} from '@angular/core';

import {Post, PostCardsService} from '../../services/post-cards.service';

@Component({
  selector: 'app-navigation-tag',
  templateUrl: './navigation-tag.component.html',
  styleUrls: ['./navigation-tag.component.scss']
})

export class NavigationTagComponent implements OnInit {
  constructor(public postCardsService: PostCardsService) { }
  @Input() post: Post;
  ngOnInit(): void {
  }

}
