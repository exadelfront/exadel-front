import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-select',
  template: `<select required>
              <option value="" hidden>English level...</option>
              <option value="A1" name='english'>A1</option>
              <option value="A2" name='english'>A2</option>
              <option value="B1" name='english'>B1</option>
              <option value="B2" name='english'>B2</option>
              <option value="C1" name='english'>C1</option>
              <option value="C2" name='english'>C2</option>
            </select>`,
  styleUrls: ['./join-select.component.scss']
})
export class JoinSelectComponent implements OnInit {
  // id: number;
  // name: string;
  // value: string;

  //english:any = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  constructor() { }

  ngOnInit(): void {
  }

}

// export const EnglishArr: JoinSelectComponent[] = [
//   {id: 1, name: 'english', value: 'eng'},
//   {id: 2, name: 'english', source: 'ita'},
//   {id: 3, name: 'english', source: 'fra'},
//   {id: 4, name: 'english', source: 'deu'},
// ]
