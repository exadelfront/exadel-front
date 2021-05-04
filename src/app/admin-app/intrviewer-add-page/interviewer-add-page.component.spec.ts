import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerAddPageComponent } from './interviewer-add-page.component';

describe('IntrviewerAddPageComponent', () => {
  let component: InterviewerAddPageComponent;
  let fixture: ComponentFixture<InterviewerAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewerAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
