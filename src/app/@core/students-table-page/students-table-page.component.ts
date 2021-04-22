import { Component, OnInit } from '@angular/core';
import {Student} from '../../services/students.service';

@Component({
  selector: 'app-students-table-page',
  templateUrl: './students-table-page.component.html',
  styleUrls: ['./students-table-page.component.scss']
})
export class StudentsTablePageComponent implements OnInit {

  students: Student[] = [];
  
  constructor( ) { }

  ngOnInit(): void {
    
  }
  
}
