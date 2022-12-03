import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmsgPage } from './sendmsg.page';

describe('SendmsgPage', () => {
  let component: SendmsgPage;
  let fixture: ComponentFixture<SendmsgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendmsgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendmsgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
