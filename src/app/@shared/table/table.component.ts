import { Location } from '@angular/common';
import {OnInit,Component, ViewChild,ElementRef, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
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
  @ViewChild('location_select') locationSelect: ElementRef;
  @ViewChild('internship_select') internshipSelect: ElementRef;
  
  public displayedColumns: string[] = ['name', 'email', 'subjects', 'status','hrManager'];
  public dataSource = new MatTableDataSource();
  public locations = new Set();
  public internships= new Set();
  
  constructor(private router: Router, private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.studentsService.fetchEvents().subscribe(res => {
      this.students = res;
      this.getLocations();
      this.getInternships();
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getLocations():void {
    for (let i = 0; i < this.students.length; i++){
      this.locations.add(this.students[i].traineeLocation);
    }
  }

  getInternships():void {
    for (let i = 0; i < this.students.length; i++){
      this.internships.add(this.students[i].internshipName);
    }
  }

  selectFilter(value:string) {
    this.dataSource.filter = value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
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