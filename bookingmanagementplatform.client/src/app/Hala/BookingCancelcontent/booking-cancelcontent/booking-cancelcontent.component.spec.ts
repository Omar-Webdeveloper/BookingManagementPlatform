import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCancelcontentComponent } from './booking-cancelcontent.component';

describe('BookingCancelcontentComponent', () => {
  let component: BookingCancelcontentComponent;
  let fixture: ComponentFixture<BookingCancelcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingCancelcontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingCancelcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
