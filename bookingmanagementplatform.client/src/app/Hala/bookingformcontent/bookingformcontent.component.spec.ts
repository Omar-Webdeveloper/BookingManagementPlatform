import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingformcontentComponent } from './bookingformcontent.component';

describe('BookingformcontentComponent', () => {
  let component: BookingformcontentComponent;
  let fixture: ComponentFixture<BookingformcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingformcontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingformcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
