import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalTabComponent } from './normal-tab.component';

describe('NormalTabComponent', () => {
  let component: NormalTabComponent;
  let fixture: ComponentFixture<NormalTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
