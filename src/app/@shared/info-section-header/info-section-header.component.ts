import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-section-header',
  templateUrl: './info-section-header.component.html',
  styleUrls: ['./info-section-header.component.scss']
})
export class InfoSectionHeaderComponent implements OnInit {

  @Input() header1_text:string;
  @Input() header2_text:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
