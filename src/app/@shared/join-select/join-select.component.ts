import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-join-select',
  template: `<select name="English">
              <option value="" hidden>English level...</option>
              <option *ngFor="let eng of englishArr"
                      value="{{eng}}"
              >
              {{eng}}</option>
            </select>
            <span class='star'>*</span>`,
  styleUrls: ['./join-select.component.scss']
})
export class JoinSelectComponent implements OnInit {

  @Input() englishArr:string[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  constructor() { }

  ngOnInit(): void {
  }

}

