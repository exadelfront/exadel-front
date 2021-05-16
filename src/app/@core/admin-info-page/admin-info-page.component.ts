import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Admin, InterviewerService} from '../../services/interviewer.service';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmDialogModel, DialogConfirmComponent } from 'src/app/@shared/dialog-confirm/dialog-confirm.component';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-info-page',
  templateUrl: './admin-info-page.component.html',
  styleUrls: ['./admin-info-page.component.scss']
})
export class AdminInfoPageComponent implements OnInit {

  
  subjects: string = "";
  admin:Admin;
  result: boolean;
  selectedDates: string[] = [];
  form: FormGroup;
  selectDateForm: FormGroup;
  success=false;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private interviewerService: InterviewerService,
    public dialog: MatDialog,
    private _location: Location
  ) {
    this.form = new FormGroup({
      button: new FormControl(null)
    });
    this.selectDateForm = new FormGroup({
      selectedDate: new FormControl(null, Validators.required),
    });
    }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.interviewerService.getAdminInfo(+params.id)
        .subscribe(res => {
          this.admin = res;
          this.subjects=this.getSubjects(this.subjects);
          this.getDates();
        });
    });
  }
  onAddDateBtnClick(): void {
    if (!this.selectDateForm.invalid) {
      const selectedDate  = this.selectDateForm.get('selectedDate').value;
      this.selectedDates.push(selectedDate);
      this.selectDateForm.reset();
      return;
    }
    console.log('invalid');
  }
  deleteSelectedDate(event: MouseEvent): void {
    const deletedDate: number = +((event.target as HTMLElement).parentNode as HTMLElement).getAttribute('index');
    this.selectedDates = this.selectedDates.slice();
    this.selectedDates.splice(deletedDate, 1);
  }

  dateToNormalView(strDate: string): string {
    const [date, time] = strDate.split('T');
    return `Date: ${date}, Time: ${time}`;
  }

  getDates(){
    for (let i = 0; i <= this.admin.interviewTimes.length; i++) {
      this.selectedDates.push(this.admin.interviewTimes[i]["startDate"])
    }
  }
  getSubjects(subjects:string): string{
    this.admin.subjects.forEach(function(value){
      subjects += "#"+value+' ';
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
  submit():void {
    const interviewTimes = this.selectedDates.map(startDate => {
      return {
        startDate,
      };
    });
    this.interviewerService
      .sendTime({interviewTimes},this.admin.id)
      .subscribe(
        () => {
          this.showSuccessMsg();
        },
        () => {
          this.showErrorMsg();
        }
      );
    console.log({interviewTimes});
  }
}