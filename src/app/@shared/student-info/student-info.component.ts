import { Component,Input,OnInit,ViewChild,ElementRef } from '@angular/core';
import {Student, StudentsService} from '../../services/students.service';
import {Admin, InterviewerService} from '../../services/interviewer.service';
@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
  
export class StudentInfoComponent implements OnInit {
  
  @ViewChild('textInput') textInput: ElementRef;
  @Input() type_name: boolean;
  @Input() type_link: boolean;
  @Input() type_div: boolean;
  @Input() type_blue: boolean;
  @Input() text: string;
  @Input() name: string;
  @Input() github_href:string;
  @Input() is_readonly: boolean = true;
  @Input() student: Student;
  @Input() admin: Admin;
  @Input() is_admin: true;

  constructor(private studentsService: StudentsService,private interviewerService:InterviewerService) { }

  ngOnInit(): void {
  }

  correct(): void {
    this.is_readonly = !this.is_readonly;
  }

  saveInfo():void {
    if(this.is_admin){
      this.text = this.textInput.nativeElement.value;
      this.is_readonly = !this.is_readonly;
      this.admin = this.replace_value_admin(this.name, this.admin);
      this.interviewerService.updateData(this.admin,this.admin.id).subscribe(
        data=>console.log(data)
    );
    }else{
    this.text = this.textInput.nativeElement.value;
    this.is_readonly = !this.is_readonly;
    this.student = this.replace_value(this.name, this.student);
    this.studentsService.updateData(this.student,this.student.traineeId).subscribe(
      data=>console.log(data)
    );
    }
  }
  
  replace_value(str: string, student: Student): Student{
    student[str]=this.textInput.nativeElement.value;
    return student;
  }
  replace_value_admin(str: string, admin: Admin): Admin{
    admin[str]=this.textInput.nativeElement.value;
    return admin;
  }
}
