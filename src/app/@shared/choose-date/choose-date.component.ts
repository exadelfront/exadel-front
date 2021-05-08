import { Component, Input, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { InterviewerTimes,Interviewers } from '../../services/interviewer.service';
import { Interview,InterviewService } from '../../services/interview.service';

@Component({
  selector: 'app-choose-date',
  templateUrl: './choose-date.component.html',
  styleUrls: ['./choose-date.component.scss']
})
export class ChooseDateComponent implements OnInit {

  @Input() traineeId: number;
  @Input() internshipId: number;
  @Input() time_slots: InterviewerTimes[];
  time_slot: InterviewerTimes;
  interviewers: Interviewers[];
  interviewer: Interviewers;
  
  constructor(private interviewService:InterviewService) {
   }

  ngOnInit(): void {
    
  }
  changeInterviewer(event: MatSelectChange) {
    this.interviewer = event.value;
  }
  changeDate(event: MatSelectChange) {
    this.time_slot = event.value;
    this.interviewers = this.time_slot.interviewers;
  }
  dateToNormalView(strDate: string): string {
    const [date, time] = strDate.split('T');
    return `Date: ${date}, Time: ${time}`;
  }
  saveInterviewDate(): void{
    this.interviewService.sendDate({interviewerId:this.interviewer.interviewerId,traineeId:this.traineeId,internshipId:this.internshipId,interviewTimeId:this.time_slot.interviewTimeId}).subscribe();
  }
}
