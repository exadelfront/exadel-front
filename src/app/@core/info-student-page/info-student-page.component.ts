import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Student, StudentsService} from '../../services/students.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info-student-page',
  templateUrl: './info-student-page.component.html',
  styleUrls: ['./info-student-page.component.scss']
})
export class InfoStudentPageComponent implements OnInit {
  dates: string = "";
  name: string;
  surname: string;
  email: string;
  status: string;
  phone: number;
  github: string;
  skype: string;
  location: string;
  intern_title: string;
  english: string;
  cv: string;
  form: FormGroup;
  del_form: FormGroup;
  student: Student;
  
  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.studentsService.fetchStudentById(+params.id)
        .subscribe(student => {
          this.student = student;
          this.name = this.student.name;
          this.surname = this.student.surname;
          this.email= this.student.email;
          this.status= this.student.traineeStatus;
          this.phone= this.student.phone;
          this.github= this.student.github;
          this.skype= this.student.skype;
          this.location= this.student.location;
          this.intern_title= this.student.internshipTitle;
          this.english = this.student.english;
          this.cv = this.student.cv;
          this.dates=this.getDates(this.dates);
        });
    });

    this.form = new FormGroup({
      review: new FormControl(null),
    });
    this.del_form = new FormGroup({
      review: new FormControl(null),
    });
  }

  getDates(dates:string): string{
    this.student.dates.forEach(function(value){
      dates += "("+Object.values(value)+") ";
    });
    return dates;
  }
  deleteData(): void{
    this.studentsService.deleteStudent(this.student.traineeId).subscribe(
      data => console.log(data)
    );
    this.router.navigate([`/admin/table`]);
  }
}
