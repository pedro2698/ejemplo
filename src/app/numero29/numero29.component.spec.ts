import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero29Component } from './numero29.component';

describe('Numero29Component', () => {
  let component: Numero29Component;
  let fixture: ComponentFixture<Numero29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
