import {OnInit,Component, ViewChild,Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {Student, StudentsService} from '../../services/students.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  @Input() students: Student[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['traineeFullName', 'email', 'subjects', 'traineeStatus'];
  public dataSource = new MatTableDataSource();
  public statuses = new Set();
  public internships = new Set();
  form: FormGroup;
  status: string = "";
  internship: string = "";
  show_msg_block: boolean;
  success=false;
  error = false;


  constructor(private router: Router, private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.getData();
    this.form = new FormGroup({
      msg: new FormControl(null, Validators.required),
    });
  }
  getData(): void {
      this.studentsService.fetchEvents().subscribe(res => {
        this.students = res;
        this.getStatusesAndInternships();
        this.dataSource = new MatTableDataSource(this.students);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  getStatusesAndInternships():void {
    for (let i = 0; i < this.students.length; i++){
      this.statuses.add(this.students[i].traineeStatus);
      this.internships.add(this.students[i].internshipName);
    }
  }
  changeStatus(event: MatSelectChange) {
    this.status = event.value;
    (this.status === 'ACCEPTED' || this.status === 'REJECTED') ? this.show_msg_block = true : this.show_msg_block = false;
  }
  changeInternship(event: MatSelectChange) {
    this.internship = event.value;
  }
  clearStatuses():void {
    this.status = '';
    this.selectFilterServer();
  }
  clearInternships(): void {
    this.internship = '';
    this.selectFilterServer();
  }
  selectFilterServer() {
    if (this.status === '' && this.internship != '') {
      this.studentsService.filterDataOne('internship.title', this.internship).subscribe(res => {
        this.students = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } else if (this.internship === '' && this.status != '') {
      this.studentsService.filterDataOne('traineeStatus', this.status).subscribe(res => {
        this.students = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } else if (this.internship === '' && this.status === '') {
      this.getData();
    } else {
      this.studentsService.filterDataMany('traineeStatus', this.status, 'internship.title', this.internship).subscribe(res => {
        this.students = res;
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
    this.router.navigate([`/login/stud-info/${id}`]);
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
  sendNotify() {
    let idMas: number[] = [];
    for (let student of this.students) {
       idMas.push(student.additionalInfoId);
    }
    this.studentsService.notifyStudents({ message: this.form.get('msg').value, additionalInfoIds: idMas }).subscribe(
      () => {
        this.showSuccessMsg();
      },
      () => {
        this.showErrorMsg();
      }
    );
  }
}

