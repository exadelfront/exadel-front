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
  
  constructor() { }

  ngOnInit(): void {
  }

}
