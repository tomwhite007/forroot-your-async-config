import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherContainer1Component } from './other-container1.component';

describe('OtherContainer1Component', () => {
  let component: OtherContainer1Component;
  let fixture: ComponentFixture<OtherContainer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtherContainer1Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherContainer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
