import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalaTestCompComponent } from './hala-test-comp.component';

describe('HalaTestCompComponent', () => {
  let component: HalaTestCompComponent;
  let fixture: ComponentFixture<HalaTestCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HalaTestCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalaTestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
