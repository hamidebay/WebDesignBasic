import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuzernComponent } from './luzern.component';

describe('LuzernComponent', () => {
  let component: LuzernComponent;
  let fixture: ComponentFixture<LuzernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuzernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuzernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
