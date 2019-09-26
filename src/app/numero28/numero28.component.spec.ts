import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero28Component } from './numero28.component';

describe('Numero28Component', () => {
  let component: Numero28Component;
  let fixture: ComponentFixture<Numero28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
