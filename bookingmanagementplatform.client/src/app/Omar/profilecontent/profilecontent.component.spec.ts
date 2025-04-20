import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecontentComponent } from './profilecontent.component';

describe('ProfilecontentComponent', () => {
  let component: ProfilecontentComponent;
  let fixture: ComponentFixture<ProfilecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilecontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
