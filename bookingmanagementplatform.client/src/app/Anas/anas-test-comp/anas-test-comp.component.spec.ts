import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnasTestCompComponent } from './anas-test-comp.component';

describe('AnasTestCompComponent', () => {
  let component: AnasTestCompComponent;
  let fixture: ComponentFixture<AnasTestCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnasTestCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnasTestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
