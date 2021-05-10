import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewAdminComponent } from './post-view-admin.component';

describe('PostViewAdminComponent', () => {
  let component: PostViewAdminComponent;
  let fixture: ComponentFixture<PostViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostViewAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
