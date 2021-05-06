import { Component, OnInit, ViewChild } from '@angular/core';
import { Interviewer, InterviewerService } from '../../services/interviewer.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-interviewers-table-page',
  templateUrl: './interviewers-table-page.component.html',
  styleUrls: ['./interviewers-table-page.component.scss']
})
export class InterviewersTablePageComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'type', 'subjects'];
  interviewers: MatTableDataSource<Interviewer>;
  interviewersTypes = new Set();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public interviewerService: InterviewerService) { }

  ngOnInit(): void {
    this.interviewerService.getAllInterviewers()
      .subscribe(interviewers => {
        this.interviewersChange(interviewers);
        interviewers.forEach(interviewer => this.interviewersTypes.add(interviewer.type));
      });
  }

  interviewersChange(newInterviewers: Interviewer[]): void {
    this.interviewers = new MatTableDataSource(newInterviewers);
    this.interviewers.paginator = this.paginator;
    this.interviewers.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.interviewers.filter = filterValue.trim().toLowerCase();
  }

  onInterviewerTypeSelectChange(event: MatSelectChange): void {
    if (event.value) {
      this.interviewerService.getInterviewersByType(event.value.toLowerCase())
        .subscribe(interviewers => this.interviewersChange(interviewers));
      return;
    }
    this.interviewerService.getAllInterviewers()
      .subscribe(interviewers => this.interviewersChange(interviewers));
  }
}
