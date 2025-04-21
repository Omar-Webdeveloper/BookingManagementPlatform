import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequstBookingComponent } from './requst-booking.component';

describe('RequstBookingComponent', () => {
  let component: RequstBookingComponent;
  let fixture: ComponentFixture<RequstBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequstBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequstBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
