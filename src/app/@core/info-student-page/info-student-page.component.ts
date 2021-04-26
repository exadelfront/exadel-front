import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Student, StudentsService} from '../../services/students.service';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogModel, DialogConfirmComponent } from 'src/app/@shared/dialog-confirm/dialog-confirm.component';
import { Location } from '@angular/common';
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
  student: Student;
  result: boolean;
  
  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router,
    public dialog: MatDialog,
    private _location: Location
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
  }

  getDates(dates:string): string{
    this.student.dates.forEach(function(value){
      dates += "("+Object.values(value)+") ";
    });
    return dates;
  }
  deleteStudent(): void{
    const message = `Are you sure you want to DELETE STUDENT ` +this.student.name+ " " +this.student.surname +' (according to email)? It include NOT ONLY this information, but ALL student info in ALL Internships';
    const dialogData = new ConfirmDialogModel("Confirm Deleting", message);
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      maxWidth: "60vw",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result) {
      this.studentsService.deleteStudent(this.student.traineeId).subscribe(
        data => console.log(data)
      );
        this._location.back();
    }
    });
  }
  deleteInfo(): void{
    const message = `Are you sure you want to DELETE THIS INFO of the student ` +this.student.name+ " " +this.student.surname +' (according to email)? It include ONLY this info of the student. Another student info (in different internships) will be safe.';
    const dialogData = new ConfirmDialogModel("Confirm Deleting", message);
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      maxWidth: "60vw",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result) {
      this.studentsService.deleteStudentInfo(this.student.id).subscribe(
        data => console.log(data)
      );
        this._location.back();
    }
    });
  }
  openHistory(): void{
    const id = this.student.traineeId;
    this.router.navigate([`/admin/stud-info/history/${id}`]);
  }
}