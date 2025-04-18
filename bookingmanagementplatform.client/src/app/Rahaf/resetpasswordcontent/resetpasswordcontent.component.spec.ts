import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswordcontentComponent } from './resetpasswordcontent.component';

describe('ResetpasswordcontentComponent', () => {
  let component: ResetpasswordcontentComponent;
  let fixture: ComponentFixture<ResetpasswordcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetpasswordcontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetpasswordcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
