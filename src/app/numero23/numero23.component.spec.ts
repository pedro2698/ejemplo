import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero23Component } from './numero23.component';

describe('Numero23Component', () => {
  let component: Numero23Component;
  let fixture: ComponentFixture<Numero23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
