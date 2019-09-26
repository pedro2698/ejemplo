import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero22Component } from './numero22.component';

describe('Numero22Component', () => {
  let component: Numero22Component;
  let fixture: ComponentFixture<Numero22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numero22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numero22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
