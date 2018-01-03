/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WipsComponent } from './wips.component';

describe('WipsComponent', () => {
  let component: WipsComponent;
  let fixture: ComponentFixture<WipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

