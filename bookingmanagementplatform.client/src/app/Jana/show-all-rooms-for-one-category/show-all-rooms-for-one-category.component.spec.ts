import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllRoomsForOneCategoryComponent } from './show-all-rooms-for-one-category.component';

describe('ShowAllRoomsForOneCategoryComponent', () => {
  let component: ShowAllRoomsForOneCategoryComponent;
  let fixture: ComponentFixture<ShowAllRoomsForOneCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowAllRoomsForOneCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllRoomsForOneCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
