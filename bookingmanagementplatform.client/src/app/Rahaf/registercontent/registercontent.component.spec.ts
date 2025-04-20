import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercontentComponent } from './registercontent.component';

describe('RegistercontentComponent', () => {
  let component: RegistercontentComponent;
  let fixture: ComponentFixture<RegistercontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistercontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
