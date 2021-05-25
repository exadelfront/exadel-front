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
  @Input() type_subjects: boolean;
  @Input() text: string;
  @Input() name: string;
  @Input() github_href:string;
  @Input() is_readonly: boolean = true;
  @Input() student: Student;
  @Input() admin: Admin;
  @Input() is_admin: true;
  
  success = false;
  error = false;

  constructor(private studentsService: StudentsService,private interviewerService:InterviewerService) { }

  ngOnInit(): void {
  }

  correct(): void {
    this.is_readonly = !this.is_readonly;
  }

  saveInfo():void {
    this.text = this.textInput.nativeElement.value;
    this.is_readonly = !this.is_readonly;
    
    if (this.is_admin) {
      this.admin = this.replace_value_admin(this.name, this.admin);
      this.updateInfoAdmin(this.admin, this.admin.id);
    }else{
      this.student = this.replace_value(this.name, this.student);
      this.updateInfoStudent(this.student, this.student.traineeId);
    }
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
  saveSubjects():void {
    this.text = this.textInput.nativeElement.value;
      this.is_readonly = !this.is_readonly;
      this.admin = this.replace_subjects_admin(this.name, this.admin);
      this.updateInfoAdmin(this.admin, this.admin.id);
  }
  updateInfoStudent(obj:any,id:number) {
    this.studentsService.updateData(obj,id).subscribe(
       () => {
          this.showSuccessMsg();
        },
        () => {
          this.showErrorMsg();
        }
    );
  }
  updateInfoAdmin(obj:any,id:number) {
    this.interviewerService.updateData(obj,id).subscribe(
       () => {
          this.showSuccessMsg();
        },
        () => {
          this.showErrorMsg();
        }
    );
  }
  replace_subjects_admin(str: string, admin: Admin) {
    admin[str] = this.textInput.nativeElement.value.split(' #').filter(Boolean);
    return admin;
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
