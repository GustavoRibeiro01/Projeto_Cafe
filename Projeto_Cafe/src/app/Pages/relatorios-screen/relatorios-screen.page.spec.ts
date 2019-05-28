import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosScreenPage } from './relatorios-screen.page';

describe('RelatoriosScreenPage', () => {
  let component: RelatoriosScreenPage;
  let fixture: ComponentFixture<RelatoriosScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriosScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriosScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
