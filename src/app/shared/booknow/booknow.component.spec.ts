import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooknowComponent } from './booknow.component';

describe('BooknowComponent', () => {
  let component: BooknowComponent;
  let fixture: ComponentFixture<BooknowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooknowComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
