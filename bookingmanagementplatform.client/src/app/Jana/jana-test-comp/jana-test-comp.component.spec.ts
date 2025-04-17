import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanaTestCompComponent } from './jana-test-comp.component';

describe('JanaTestCompComponent', () => {
  let component: JanaTestCompComponent;
  let fixture: ComponentFixture<JanaTestCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JanaTestCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanaTestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
