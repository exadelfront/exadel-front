import {AfterViewInit,Component, ViewChild, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {Student} from '../../services/students.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements AfterViewInit {
  
  @Input() student: Student;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  public displayedColumns: string[] = ['name', 'email', 'subjects', 'status','hrManager'];
  public dataSource : MatTableDataSource<Student>;

  
  constructor(private router: Router) {
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
  openInfo():void {
    this.router.navigate([`/admin/info/${this.student.id}`]);
  }
}

