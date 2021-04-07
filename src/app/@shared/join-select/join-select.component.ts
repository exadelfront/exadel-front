import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-join-select',
  template: ` <div>
                  <select name="English" (ngChange) = "onChangeColor()">
                    <option value="" hidden>{{'JOIN_FORM.English' | translate}}</option>
                    <option *ngFor="let eng of englishArr"
                            value="{{eng}}"
                    >
                    {{eng}}</option>
                  </select>
              </div>`,
  styleUrls: ['./join-select.component.scss']
})
export class JoinSelectComponent implements OnInit {

  @Input() englishArr:string[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  constructor() { }

  ngOnInit(): void {
  }


  onChangeColor() {
    const select = document.querySelector("select");
    console.log(select)
  }

}

