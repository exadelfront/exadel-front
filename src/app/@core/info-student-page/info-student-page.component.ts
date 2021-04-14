import { Component, OnInit } from '@angular/core';

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
  dates: string[] = [" 2021/08/08,14:00-16:00"," 2021/08/09,13:00-15:00"];
  constructor() { }

  ngOnInit(): void {
  }

}
