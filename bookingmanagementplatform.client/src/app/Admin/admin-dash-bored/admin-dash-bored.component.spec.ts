import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashBoredComponent } from './admin-dash-bored.component';

describe('AdminDashBoredComponent', () => {
  let component: AdminDashBoredComponent;
  let fixture: ComponentFixture<AdminDashBoredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDashBoredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashBoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
