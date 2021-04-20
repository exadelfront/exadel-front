import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-info-student-page',
  templateUrl: './info-student-page.component.html',
  styleUrls: ['./info-student-page.component.scss']
})
export class InfoStudentPageComponent implements OnInit {
  stud_name: string = "Vlad Prisonglate";
  email: string = "mymail@gmail.com";
  status: string = "In waiting list";
  telephone: string = "+380966666666";
  github_link: string = "http://google.com";
  dates: string[] = ["Thursday,14:00-16:00"," Monday,13:00-15:00"," Monday,15:00-18:00"];
  skype:string="skype";
  location:string="Ukraine";
  internship:string="JS + Java Internship";
  english:string="B2";
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      review: new FormControl(null),
    });
  }

}
