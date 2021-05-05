import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Admin, InterviewerService} from '../../services/interviewer.service';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmDialogModel, DialogConfirmComponent } from 'src/app/@shared/dialog-confirm/dialog-confirm.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-info-page',
  templateUrl: './admin-info-page.component.html',
  styleUrls: ['./admin-info-page.component.scss']
})
export class AdminInfoPageComponent implements OnInit {

  dates: string = "";
  subjects: string = "";
  admin:Admin;
  result: boolean;

  constructor(
    private route: ActivatedRoute,
    private interviewerService: InterviewerService,
    public dialog: MatDialog,
    private _location: Location
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.interviewerService.getAdminInfo(+params.id)
        .subscribe(res => {
          console.log(res);
          this.admin = res;
          this.dates=this.getDates(this.dates);
          this.subjects=this.getSubjects(this.subjects);
        });
    });
  }
  getDates(dates:string): string{
    this.admin.interviewTimes.forEach(function(value){
      dates += "("+Object.values(value)+") ";
    });
    return dates;
  }
  getSubjects(subjects:string): string{
    this.admin.subjects.forEach(function(value){
      subjects = "#"+value+' ';
    });
    return subjects;
  }
  deleteAdmin(): void{
    const message = `Are you sure you want to DELETE ADMIN ` +this.admin.name+ " " +this.admin.surname +' ?';
    const dialogData = new ConfirmDialogModel("Confirm Deleting", message);
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      maxWidth: "65vw",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result) {
      this.interviewerService.deleteAdmin(this.admin.id).subscribe(
        data => console.log(data)
      );
        this._location.back();
    }
    });
  }
}
