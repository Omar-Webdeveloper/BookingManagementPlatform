import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MohammadTestCompComponent } from './mohammad-test-comp.component';

describe('MohammadTestCompComponent', () => {
  let component: MohammadTestCompComponent;
  let fixture: ComponentFixture<MohammadTestCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MohammadTestCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MohammadTestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
