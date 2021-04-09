import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-join-input',
  template: `<div>
              <input placeholder="{{placeholder}}" type="{{type}}" name="{{name}}"/>
             </div>`,
  styleUrls: ['./join-input.component.scss']
})
export class JoinInputComponent implements OnInit {

  @Input() placeholder: any;
  @Input() type:string;
  @Input() name:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
