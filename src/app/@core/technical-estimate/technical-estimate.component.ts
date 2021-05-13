import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-technical-estimate',
  templateUrl: './technical-estimate.component.html',
  styleUrls: ['./technical-estimate.component.scss']
})
export class TechnicalEstimateComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      subscription: new FormControl(null),
    });
  }

}
