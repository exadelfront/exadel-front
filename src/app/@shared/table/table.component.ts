import {AfterViewInit,Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface StudentData {
  name: string;
  email: string;
  technology: string;
  status: string;
  hrManager: string;
}
const STUDENTS_DATA: StudentData[] = [
  {name: 'Name SurnameLonggggggggggggggggggggggggggggg', email: 'mail@gmail.comLonggggggggggggggggggggggggggggg', technology: 'JS', status:'Approved', hrManager:'Name SurnameLonggggggggggggggggggggggggggggg'},
  {name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status:'Approved', hrManager:'Name Surname'},
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  {name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status:'Approved', hrManager:'Name Surname'},
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  {name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status:'Approved', hrManager:'Name Surname'},
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  { name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status: 'Approved', hrManager: 'Name Surname' },
  {name: 'Name Surname', email: 'mail@gmail.com', technology: 'JS', status:'Approved', hrManager:'Name Surname'}
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['name', 'email', 'technology', 'status', 'hrManager'];
  dataSource = new MatTableDataSource<StudentData>(STUDENTS_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(STUDENTS_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  OpenInfo():void {
    window.open('http://google.com', '_blank');
  }
}
