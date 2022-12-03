import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltoursPage } from './alltours.page';

describe('AlltoursPage', () => {
  let component: AlltoursPage;
  let fixture: ComponentFixture<AlltoursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltoursPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
