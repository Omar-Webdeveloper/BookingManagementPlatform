import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUScontentComponent } from './contact-uscontent.component';

describe('ContactUScontentComponent', () => {
  let component: ContactUScontentComponent;
  let fixture: ComponentFixture<ContactUScontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactUScontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUScontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
