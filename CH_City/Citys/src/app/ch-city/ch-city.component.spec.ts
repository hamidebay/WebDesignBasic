import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CHCityComponent } from './ch-city.component';

describe('CHCityComponent', () => {
  let component: CHCityComponent;
  let fixture: ComponentFixture<CHCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CHCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CHCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
