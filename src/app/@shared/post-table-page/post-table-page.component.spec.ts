import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTablePageComponent } from './post-table-page.component';

describe('PostTablePageComponent', () => {
  let component: PostTablePageComponent;
  let fixture: ComponentFixture<PostTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTablePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
