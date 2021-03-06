import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Student, StudentsService} from '../../services/students.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogModel, DialogConfirmComponent } from 'src/app/@shared/dialog-confirm/dialog-confirm.component';
import { Location } from '@angular/common';
import {InterviewerTimes, InterviewerService } from '../../services/interviewer.service';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-info-student-page',
  templateUrl: './info-student-page.component.html',
  styleUrls: ['./info-student-page.component.scss']
})
export class InfoStudentPageComponent implements OnInit {
  dates: string = "";
  form: FormGroup;
  student: Student;
  result: boolean;
  success=false;
  error = false;
  hrTimes: InterviewerTimes[];
  techTimes: InterviewerTimes[];
  englishLevels: string[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  role: string;

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private interviewerService: InterviewerService,
    private router: Router,
    public dialog: MatDialog,
    private cookieService: CookieService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.studentsService.fetchStudentById(+params.id)
        .subscribe(student => {
          this.student = student;
          this.student.traineeStatus = this.replaceUnderscore(this.student.traineeStatus);
          this.form = new FormGroup({
            hrReview: new FormControl(null),
            techReview: new FormControl(null),
            english: new FormControl({value:this.student?.english, disabled:true})
          });
          this.interviewerService.getTechInterviewers(this.student?.subjects).subscribe(res => this.techTimes = res);
          this.dates=this.getDates(this.dates);
          this.form.get("techReview").patchValue(this.student?.techInterview);
          this.form.get("hrReview").patchValue(this.student?.hrInterview);
        });
    });

    this.interviewerService.getHRInterviewers().subscribe(res => this.hrTimes = res);

    this.form = new FormGroup({
      hrReview: new FormControl(null),
      techReview: new FormControl(null),
      english: new FormControl({value:this.student?.english, disabled:true})
    });


    this.role = this.cookieService.get('role');
  }

  getDates(dates:string): string{
    this.student.dates.forEach(function(value){
      dates += "("+Object.values(value)+") ";
    });
    return dates;
  }
  dateToNormalView(strDate: string): string {
    const [date, time] = strDate.split('T');
    return `${date}//${time}`;
  }
  deleteStudent(): void{
    const message = `Are you sure you want to DELETE STUDENT ` +this.student.name+ " " +this.student.surname +' (according to email)? It include NOT ONLY this information, but ALL student info in ALL Internships';
    const dialogData = new ConfirmDialogModel("Confirm Deleting", message);
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      maxWidth: "65vw",
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
      maxWidth: "65vw",
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
    this.router.navigate([`/login/stud-info/history/${id}`]);
  }
  replaceUnderscore(str: string) {
    return str.replace(/_/g, ' ');
  }
  showErrorMsg() {
    this.error = true;
        setTimeout(function () {
          this.error = false;
        }.bind(this), 5000);
  }
  showSuccessMsg() {
    this.success = true;
        setTimeout(function () {
          this.success = false;
        }.bind(this), 5000);
  }
  sendApprove() {
    this.studentsService.approve({ isApproved: true }, this.student.id).subscribe(
        () => {
          this.showSuccessMsg();
        },
        () => {
          this.showErrorMsg();
        });
  }
  sendReject(){
    this.studentsService.reject({ isApproved: false }, this.student.id).subscribe(
        () => {
          this.showSuccessMsg();
        },
        () => {
          this.showErrorMsg();
        });
  }
}
