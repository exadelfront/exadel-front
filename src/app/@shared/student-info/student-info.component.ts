import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {
  
  @Input() type_name: boolean;
  @Input() type_link: boolean;
  @Input() type_blue: boolean;
  @Input() text: string;
  @Input() github_href:string;
  @Input() is_readonly: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }
  correct(): void {
    this.is_readonly = !this.is_readonly;
  }
  onKey(event) {this.text = event.target.value;}
}