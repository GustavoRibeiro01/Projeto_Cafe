import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Relatorios2ScreenPage } from './relatorios2-screen.page';

describe('Relatorios2ScreenPage', () => {
  let component: Relatorios2ScreenPage;
  let fixture: ComponentFixture<Relatorios2ScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Relatorios2ScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Relatorios2ScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
