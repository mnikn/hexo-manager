import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceTabComponent } from './performance-tab.component';

describe('PerformanceTabComponent', () => {
  let component: PerformanceTabComponent;
  let fixture: ComponentFixture<PerformanceTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
