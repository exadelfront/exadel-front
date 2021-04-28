import {OnInit,Component, ViewChild,Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {Student, StudentsService} from '../../services/students.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  
  @Input() students: Student[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['name', 'email', 'subjects', 'status','hrManager'];
  public dataSource = new MatTableDataSource();
  public statuses = new Set();
  public internships = new Set();
  status: string = "";
  internship: string = "";
  
  constructor(private router: Router, private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.getData();
  }

 getData(): void {
    this.studentsService.fetchEvents().subscribe(res => {
      this.students = res;
      this.getStatuses();
      this.getInternships();
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  getStatuses():void {
    for (let i = 0; i < this.students.length; i++){
      this.statuses.add(this.students[i].traineeStatus);
    }
  }
  getInternships():void {
    for (let i = 0; i < this.students.length; i++){
      this.internships.add(this.students[i].internshipName);
    }
  }
  changeStatus(event: MatSelectChange) {
    this.status = event.value;
  }
  changeInternship(event: MatSelectChange) {
    this.internship = event.value;
  }
  selectFilterServer() {
    if (this.status === '' && this.internship != '') {
      this.studentsService.filterDataOne('internship.title', this.internship).subscribe(res => {
        this.students = res;
        this.getStatuses();
        this.getInternships();
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } else if (this.internship === '' && this.status != '') {
      this.studentsService.filterDataOne('traineeStatus', this.status).subscribe(res => {
        this.students = res;
        this.getStatuses();
        this.getInternships();
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } else {
      this.studentsService.filterDataMany('traineeStatus', this.status, 'internship.title', this.internship).subscribe(res => {
        this.students = res;
        this.getStatuses();
        this.getInternships();
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openInfo(id:number):void {
    this.router.navigate([`/admin/stud-info/${id}`]);
  }
}