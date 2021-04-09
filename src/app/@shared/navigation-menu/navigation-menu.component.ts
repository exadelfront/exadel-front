import { Component, OnInit } from '@angular/core';
import {Post, PostCardsService} from '../../services/post-cards.service';
@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  constructor(public postCardsService: PostCardsService) { }

  ngOnInit(): void {
  }

}
