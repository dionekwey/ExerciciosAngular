/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StockStatusComponent } from './stock-status.component';

describe('StockStatusComponent', () => {
  let component: StockStatusComponent;
  let fixture: ComponentFixture<StockStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
