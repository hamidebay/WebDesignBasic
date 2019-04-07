import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZurichComponent } from './zurich.component';

describe('ZurichComponent', () => {
  let component: ZurichComponent;
  let fixture: ComponentFixture<ZurichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZurichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZurichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
