import { Component, Input, Output, OnInit } from '@angular/core';



@Component({
  selector: 'app-join-input-form',
  template:  `<input type="" name="" class='form-control' placeholder="" required/>
              <span class="star">*</span>`,
  styleUrls: ['./join-input-form.component.scss']
})


export class JoinInputFormComponent implements OnInit {

//   candidate: object = {
//     name: 'Fullname',
//     tel: 'Telephone',
//     location: 'Location',
//     email: 'Email',
//     GitHub: 'GitHub',

//  };
  
  constructor() { 
    // type: String;
    // name: String,
    // placeholder: String,
    // formControlName: String,
    // required: boolean,



  }

  ngOnInit(): void {
  }

}
