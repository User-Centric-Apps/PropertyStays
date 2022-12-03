import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktourComponent } from './booktour.component';

describe('BooktourComponent', () => {
  let component: BooktourComponent;
  let fixture: ComponentFixture<BooktourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooktourComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooktourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
