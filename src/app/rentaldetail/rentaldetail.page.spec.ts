import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaldetailPage } from './rentaldetail.page';

describe('RentaldetailPage', () => {
  let component: RentaldetailPage;
  let fixture: ComponentFixture<RentaldetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentaldetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaldetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
