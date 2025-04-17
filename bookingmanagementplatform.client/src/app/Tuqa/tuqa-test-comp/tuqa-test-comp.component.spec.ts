import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuqaTestCompComponent } from './tuqa-test-comp.component';

describe('TuqaTestCompComponent', () => {
  let component: TuqaTestCompComponent;
  let fixture: ComponentFixture<TuqaTestCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TuqaTestCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuqaTestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
