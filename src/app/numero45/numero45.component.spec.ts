import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero45Component } from './numero45.component';

describe('Numero45Component', () => {
  let component: Numero45Component;
  let fixture: ComponentFixture<Numero45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero45Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
