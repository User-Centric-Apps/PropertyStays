import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourReviewsPage } from './tour-reviews.page';

describe('TourReviewsPage', () => {
  let component: TourReviewsPage;
  let fixture: ComponentFixture<TourReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourReviewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
