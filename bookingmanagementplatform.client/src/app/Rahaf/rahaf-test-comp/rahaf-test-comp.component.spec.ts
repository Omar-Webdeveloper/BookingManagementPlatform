import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RahafTestCompComponent } from './rahaf-test-comp.component';

describe('RahafTestCompComponent', () => {
  let component: RahafTestCompComponent;
  let fixture: ComponentFixture<RahafTestCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RahafTestCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RahafTestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
