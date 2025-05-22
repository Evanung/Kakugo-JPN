import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionPostComponent } from './discussion-post.component';

describe('DiscussionPostComponent', () => {
  let component: DiscussionPostComponent;
  let fixture: ComponentFixture<DiscussionPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscussionPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
