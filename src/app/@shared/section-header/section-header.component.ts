import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {

  @Input() header_text: string;
  @Input() name: string;
  @Input() is_button: boolean;
  @Input() href: string;

  constructor() { }

  ngOnInit(): void {
  }
  openCV(): void {
    window.open(this.href, '_blank');
  }
}
