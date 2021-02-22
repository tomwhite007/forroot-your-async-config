import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubContainer1Component } from './sub-container1.component';

describe('SubContainer1Component', () => {
  let component: SubContainer1Component;
  let fixture: ComponentFixture<SubContainer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubContainer1Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubContainer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
