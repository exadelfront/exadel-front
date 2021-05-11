import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewersTablePageComponent } from './interviewers-table-page.component';

describe('InterviewersTablePageComponent', () => {
  let component: InterviewersTablePageComponent;
  let fixture: ComponentFixture<InterviewersTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewersTablePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewersTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
