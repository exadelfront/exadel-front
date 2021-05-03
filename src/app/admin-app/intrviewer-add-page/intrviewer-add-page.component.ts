import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectsService } from '../../services/subjects.service';
import { InterviewerService } from '../../services/interviewer.service';

@Component({
  selector: 'app-intrviewer-add-page',
  templateUrl: './intrviewer-add-page.component.html',
  styleUrls: ['./intrviewer-add-page.component.scss']
})
export class IntrviewerAddPageComponent implements OnInit {

  form: FormGroup;
  selectDateForm: FormGroup;
  selectedDates: string[] = [];
  showSubjects = false;

  constructor(public subjectsService: SubjectsService, private interviewerService: InterviewerService) {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      skype: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
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
    const interviewTimes = this.selectedDates.map(startDate => {
      return {
        startDate,
      };
    });
    if (this.form.value.type === 'HR') {
      // console.log({ ...this.form.value, interviewTimes });
      this.interviewerService.sendDate({ ...this.form.value, interviewTimes }).subscribe();
    }
    this.interviewerService
      .sendDate({ ...this.form.value, interviewTimes, subjects: this.subjectsService.selectedSubjects })
      .subscribe();
  }

  selectTech(): void {
    this.showSubjects = true;
  }

  selectHr(): void {
    this.showSubjects = false;
  }
}
