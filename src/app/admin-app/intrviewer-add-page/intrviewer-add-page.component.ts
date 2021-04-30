import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-intrviewer-add-page',
  templateUrl: './intrviewer-add-page.component.html',
  styleUrls: ['./intrviewer-add-page.component.scss']
})
export class IntrviewerAddPageComponent implements OnInit {

  form: FormGroup;
  selectDateForm: FormGroup;
  selectedDates: string[] = ['2021-04-29T19:51', '2021-04-29T19:51', '2021-04-29T19:51'];

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null),
      surname: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
      skype: new FormControl(null),
    });
    this.selectDateForm = new FormGroup({
      selectedDate: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
  }

  onAddDateBtnClick(): void {
    if (!this.selectDateForm.invalid) {
      const { selectedDate } = this.selectDateForm.value;
      this.selectedDates.push(selectedDate);
      return;
    }
    console.log('invalid');
  }

  deleteSelectedDate(event: MouseEvent): void {
    const deletedDate: number = +((event.target as HTMLElement).parentNode as HTMLElement)
      .getAttribute('index');
    this.selectedDates = this.selectedDates.slice();
    this.selectedDates.splice(deletedDate, 1);
  }

  dateToNormalView(strDate: string): string {
    const [date, time] = strDate.split('T');
    return `Date: ${date}, Time: ${time}`;
  }

  submit(): void {
    console.log(this.form.value);
  }
}
