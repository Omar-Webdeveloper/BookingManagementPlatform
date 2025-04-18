import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutuscontentComponent } from './aboutuscontent.component';

describe('AboutuscontentComponent', () => {
  let component: AboutuscontentComponent;
  let fixture: ComponentFixture<AboutuscontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutuscontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutuscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
