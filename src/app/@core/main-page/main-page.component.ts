import {Component, Input, OnInit} from '@angular/core';
import {Post, PostCardsService} from '../../services/post-cards.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  constructor(public postCardsService: PostCardsService) { }

  ngOnInit(): void {
  }

}
