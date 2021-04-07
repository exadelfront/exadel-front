import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-switch-button',
  templateUrl: './lang-switch-button.component.html',
  styleUrls: ['./lang-switch-button.component.scss']
})
export class LangSwitchButtonComponent implements OnInit {

  constructor(public translate: TranslateService) {

  }

  ngOnInit(): void {
  }

}
