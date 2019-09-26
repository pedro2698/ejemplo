import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero21Component } from './numero21.component';

describe('Numero21Component', () => {
  let component: Numero21Component;
  let fixture: ComponentFixture<Numero21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
