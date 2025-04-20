import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPaymentcontentComponent } from './booking-paymentcontent.component';

describe('BookingPaymentcontentComponent', () => {
  let component: BookingPaymentcontentComponent;
  let fixture: ComponentFixture<BookingPaymentcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingPaymentcontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPaymentcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
