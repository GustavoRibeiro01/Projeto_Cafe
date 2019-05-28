import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroScreenPage } from './cadastro-screen.page';

describe('CadastroScreenPage', () => {
  let component: CadastroScreenPage;
  let fixture: ComponentFixture<CadastroScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
