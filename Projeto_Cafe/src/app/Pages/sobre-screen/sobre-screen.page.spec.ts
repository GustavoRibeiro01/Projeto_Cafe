import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreScreenPage } from './sobre-screen.page';

describe('SobreScreenPage', () => {
  let component: SobreScreenPage;
  let fixture: ComponentFixture<SobreScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
