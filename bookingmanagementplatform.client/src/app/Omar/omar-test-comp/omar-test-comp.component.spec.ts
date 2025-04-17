import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmarTestCompComponent } from './omar-test-comp.component';

describe('OmarTestCompComponent', () => {
  let component: OmarTestCompComponent;
  let fixture: ComponentFixture<OmarTestCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OmarTestCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmarTestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
