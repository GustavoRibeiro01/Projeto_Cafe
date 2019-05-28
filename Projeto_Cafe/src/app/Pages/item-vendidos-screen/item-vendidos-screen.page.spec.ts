import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemVendidosScreenPage } from './item-vendidos-screen.page';

describe('ItemVendidosScreenPage', () => {
  let component: ItemVendidosScreenPage;
  let fixture: ComponentFixture<ItemVendidosScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemVendidosScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemVendidosScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
