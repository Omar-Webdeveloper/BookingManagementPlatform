import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilecontentComponent } from './editprofilecontent.component';

describe('EditprofilecontentComponent', () => {
  let component: EditprofilecontentComponent;
  let fixture: ComponentFixture<EditprofilecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditprofilecontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditprofilecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
