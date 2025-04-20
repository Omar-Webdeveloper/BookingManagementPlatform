import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllRoomsCategoriesComponent } from './show-all-rooms-categories.component';

describe('ShowAllRoomsCategoriesComponent', () => {
  let component: ShowAllRoomsCategoriesComponent;
  let fixture: ComponentFixture<ShowAllRoomsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowAllRoomsCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllRoomsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
