import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinghistorycontectComponent } from './bookinghistorycontect.component';

describe('BookinghistorycontectComponent', () => {
  let component: BookinghistorycontectComponent;
  let fixture: ComponentFixture<BookinghistorycontectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookinghistorycontectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookinghistorycontectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
