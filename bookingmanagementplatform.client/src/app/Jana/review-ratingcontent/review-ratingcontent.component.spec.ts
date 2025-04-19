import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewRatingcontentComponent } from './review-ratingcontent.component';

describe('ReviewRatingcontentComponent', () => {
  let component: ReviewRatingcontentComponent;
  let fixture: ComponentFixture<ReviewRatingcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewRatingcontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewRatingcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
