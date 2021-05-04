import { Component, Input, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Interviewer } from '../../services/interviewer.service';
import { Interview,InterviewService } from '../../services/interview.service';
@Component({
  selector: 'app-choose-date',
  templateUrl: './choose-date.component.html',
  styleUrls: ['./choose-date.component.scss']
})
export class ChooseDateComponent implements OnInit {

  @Input() traineeId: number;
  @Input() internshipId: number;
  @Input() interviewers: Interviewer[];
  interviewer: Interviewer;
  date: string;
  interview: Interview;

  constructor(private interviewService:InterviewService) { }

  ngOnInit(): void {
  }
  changeInterviewer(event: MatSelectChange) {
    this.interviewer = event.value;
  }
  changeDate(event: MatSelectChange) {
    this.date = event.value;
  }
  saveInterviewDate(): void{
    this.interview.interviewerId = this.interviewer.id;
    this.interview.interviewTime = this.date;
    this.interview.traineeId = this.traineeId;
    this.interview.internshipId = this.internshipId;
    this.interviewService.sendDate(this.interview).subscribe();
  }
}
