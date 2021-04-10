import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.scss']
})
export class AdditionalInformationComponent implements OnInit {

  @Input() additionalInfo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
