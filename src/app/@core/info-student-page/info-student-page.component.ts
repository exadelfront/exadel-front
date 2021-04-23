import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Student, StudentsService} from '../../services/students.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-info-student-page',
  templateUrl: './info-student-page.component.html',
  styleUrls: ['./info-student-page.component.scss']
})
export class InfoStudentPageComponent implements OnInit {
  stud_name: string;
  dates: string="";
  form: FormGroup;

  student: Student;
  
  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.studentsService.fetchStudentById(params.id)
        .subscribe(student => {
          console.log(student);
          this.student = student;
          this.stud_name = student.name + " " + student.surname;
          this.dates=this.getDates(this.dates);
         // student.email = 'test_email';
          //student.traineeStatus = "status";
        });
    });

    this.form = new FormGroup({
      review: new FormControl(null),
    });
  }

  getDates(dates:string): string{
    this.student.dates.forEach(function(value){
      dates += Object.values(value)+" ";
    });
    return dates;
  }
}
